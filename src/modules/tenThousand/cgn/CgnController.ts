import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cgn")
export default class CgnController {
  @operation({
    summary: "Get Cgn",
  })
  @get()
  static getCgn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cgn",
  })
  @post("{id}")
  static createCgn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
