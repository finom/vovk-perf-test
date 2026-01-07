import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcm")
export default class FcmController {
  @operation({
    summary: "Get Fcm",
  })
  @get()
  static getFcm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcm",
  })
  @post("{id}")
  static createFcm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
