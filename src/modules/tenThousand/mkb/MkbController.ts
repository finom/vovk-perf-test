import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkb")
export default class MkbController {
  @operation({
    summary: "Get Mkb",
  })
  @get()
  static getMkb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkb",
  })
  @post("{id}")
  static createMkb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
