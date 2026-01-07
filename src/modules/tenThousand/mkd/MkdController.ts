import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkd")
export default class MkdController {
  @operation({
    summary: "Get Mkd",
  })
  @get()
  static getMkd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkd",
  })
  @post("{id}")
  static createMkd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
