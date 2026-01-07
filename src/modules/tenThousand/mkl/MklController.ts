import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkl")
export default class MklController {
  @operation({
    summary: "Get Mkl",
  })
  @get()
  static getMkl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkl",
  })
  @post("{id}")
  static createMkl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
