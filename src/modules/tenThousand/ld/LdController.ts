import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lds")
export default class LdController {
  @operation({
    summary: "Get Lds",
  })
  @get()
  static getLds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ld",
  })
  @post("{id}")
  static createLd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
