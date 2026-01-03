import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apns")
export default class ApnController {
  @operation({
    summary: "Get Apns",
  })
  @get()
  static getApns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apn",
  })
  @post("{id}")
  static createApn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
