import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mkh")
export default class MkhController {
  @operation({
    summary: "Get Mkh",
  })
  @get()
  static getMkh = procedure({
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
