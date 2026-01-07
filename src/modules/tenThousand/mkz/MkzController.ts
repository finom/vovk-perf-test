import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkz")
export default class MkzController {
  @operation({
    summary: "Get Mkz",
  })
  @get()
  static getMkz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkz",
  })
  @post("{id}")
  static createMkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
