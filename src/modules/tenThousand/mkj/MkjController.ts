import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkjs")
export default class MkjController {
  @operation({
    summary: "Get Mkjs",
  })
  @get()
  static getMkjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkj",
  })
  @post("{id}")
  static createMkj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
