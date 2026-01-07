import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdc")
export default class KdcController {
  @operation({
    summary: "Get Kdc",
  })
  @get()
  static getKdc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kdc",
  })
  @post("{id}")
  static createKdc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
