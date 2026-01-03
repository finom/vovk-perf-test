import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkds")
export default class MkdController {
  @operation({
    summary: "Get Mkds",
  })
  @get()
  static getMkds = procedure({
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
