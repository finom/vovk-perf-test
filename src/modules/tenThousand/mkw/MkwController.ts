import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkws")
export default class MkwController {
  @operation({
    summary: "Get Mkws",
  })
  @get()
  static getMkws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkw",
  })
  @post("{id}")
  static createMkw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
