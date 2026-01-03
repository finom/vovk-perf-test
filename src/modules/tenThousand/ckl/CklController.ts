import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckls")
export default class CklController {
  @operation({
    summary: "Get Ckls",
  })
  @get()
  static getCkls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckl",
  })
  @post("{id}")
  static createCkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
