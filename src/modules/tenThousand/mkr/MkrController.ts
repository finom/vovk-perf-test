import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkr")
export default class MkrController {
  @operation({
    summary: "Get Mkr",
  })
  @get()
  static getMkr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkr",
  })
  @post("{id}")
  static createMkr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
