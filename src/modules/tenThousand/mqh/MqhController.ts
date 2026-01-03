import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqhs")
export default class MqhController {
  @operation({
    summary: "Get Mqhs",
  })
  @get()
  static getMqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqh",
  })
  @post("{id}")
  static createMqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
