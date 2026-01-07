import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ld")
export default class LdController {
  @operation({
    summary: "Get Ld",
  })
  @get()
  static getLd = procedure({
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
