import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exm")
export default class ExmController {
  @operation({
    summary: "Get Exm",
  })
  @get()
  static getExm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exm",
  })
  @post("{id}")
  static createExm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
