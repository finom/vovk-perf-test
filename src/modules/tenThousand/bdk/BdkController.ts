import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdks")
export default class BdkController {
  @operation({
    summary: "Get Bdks",
  })
  @get()
  static getBdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdk",
  })
  @post("{id}")
  static createBdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
