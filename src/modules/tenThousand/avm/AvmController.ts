import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avm")
export default class AvmController {
  @operation({
    summary: "Get Avm",
  })
  @get()
  static getAvm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Avm",
  })
  @post("{id}")
  static createAvm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
