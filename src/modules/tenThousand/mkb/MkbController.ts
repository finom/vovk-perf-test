import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkbs")
export default class MkbController {
  @operation({
    summary: "Get Mkbs",
  })
  @get()
  static getMkbs = procedure({
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
