import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ell")
export default class EllController {
  @operation({
    summary: "Get Ell",
  })
  @get()
  static getEll = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ell",
  })
  @post("{id}")
  static createEll = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
