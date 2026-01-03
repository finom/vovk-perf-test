import { procedure, prefix, get, post, operation } from "vovk";

@prefix("caxes")
export default class CaxController {
  @operation({
    summary: "Get Caxes",
  })
  @get()
  static getCaxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cax",
  })
  @post("{id}")
  static createCax = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
