import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ldks")
export default class LdkController {
  @operation({
    summary: "Get Ldks",
  })
  @get()
  static getLdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ldk",
  })
  @post("{id}")
  static createLdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
