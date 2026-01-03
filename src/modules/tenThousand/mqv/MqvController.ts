import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqvs")
export default class MqvController {
  @operation({
    summary: "Get Mqvs",
  })
  @get()
  static getMqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqv",
  })
  @post("{id}")
  static createMqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
