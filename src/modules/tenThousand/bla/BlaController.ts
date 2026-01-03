import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blas")
export default class BlaController {
  @operation({
    summary: "Get Blas",
  })
  @get()
  static getBlas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bla",
  })
  @post("{id}")
  static createBla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
