import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdks")
export default class CdkController {
  @operation({
    summary: "Get Cdks",
  })
  @get()
  static getCdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdk",
  })
  @post("{id}")
  static createCdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
