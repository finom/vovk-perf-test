import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdks")
export default class KdkController {
  @operation({
    summary: "Get Kdks",
  })
  @get()
  static getKdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdk",
  })
  @post("{id}")
  static createKdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
