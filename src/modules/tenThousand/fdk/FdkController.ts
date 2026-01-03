import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdks")
export default class FdkController {
  @operation({
    summary: "Get Fdks",
  })
  @get()
  static getFdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdk",
  })
  @post("{id}")
  static createFdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
