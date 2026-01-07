import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqb")
export default class MqbController {
  @operation({
    summary: "Get Mqb",
  })
  @get()
  static getMqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqb",
  })
  @post("{id}")
  static createMqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
