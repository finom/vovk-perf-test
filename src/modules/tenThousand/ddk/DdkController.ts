import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ddk")
export default class DdkController {
  @operation({
    summary: "Get Ddk",
  })
  @get()
  static getDdk = procedure({
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
