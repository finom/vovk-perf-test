import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkj")
export default class MkjController {
  @operation({
    summary: "Get Mkj",
  })
  @get()
  static getMkj = procedure({
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
