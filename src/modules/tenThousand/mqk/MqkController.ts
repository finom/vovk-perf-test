import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqks")
export default class MqkController {
  @operation({
    summary: "Get Mqks",
  })
  @get()
  static getMqks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqk",
  })
  @post("{id}")
  static createMqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
