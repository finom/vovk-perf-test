import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldzs")
export default class LdzController {
  @operation({
    summary: "Get Ldzs",
  })
  @get()
  static getLdzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldz",
  })
  @post("{id}")
  static createLdz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
