import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkhs")
export default class MkhController {
  @operation({
    summary: "Get Mkhs",
  })
  @get()
  static getMkhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mkh",
  })
  @post("{id}")
  static createMkh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
