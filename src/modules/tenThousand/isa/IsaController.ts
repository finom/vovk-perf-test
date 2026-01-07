import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isa")
export default class IsaController {
  @operation({
    summary: "Get Isa",
  })
  @get()
  static getIsa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isa",
  })
  @post("{id}")
  static createIsa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
