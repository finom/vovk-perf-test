import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkls")
export default class MklController {
  @operation({
    summary: "Get Mkls",
  })
  @get()
  static getMkls = procedure({
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
