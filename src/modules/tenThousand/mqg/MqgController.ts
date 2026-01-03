import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqgs")
export default class MqgController {
  @operation({
    summary: "Get Mqgs",
  })
  @get()
  static getMqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqg",
  })
  @post("{id}")
  static createMqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
