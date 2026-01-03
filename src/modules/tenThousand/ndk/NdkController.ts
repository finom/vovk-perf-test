import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndks")
export default class NdkController {
  @operation({
    summary: "Get Ndks",
  })
  @get()
  static getNdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ndk",
  })
  @post("{id}")
  static createNdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
