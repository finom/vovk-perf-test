import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdk")
export default class BdkController {
  @operation({
    summary: "Get Bdk",
  })
  @get()
  static getBdk = procedure({
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
