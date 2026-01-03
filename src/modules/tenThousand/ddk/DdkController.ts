import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddks")
export default class DdkController {
  @operation({
    summary: "Get Ddks",
  })
  @get()
  static getDdks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ddk",
  })
  @post("{id}")
  static createDdk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
