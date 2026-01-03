import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdcs")
export default class KdcController {
  @operation({
    summary: "Get Kdcs",
  })
  @get()
  static getKdcs = procedure({
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
