import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcx")
export default class FcxController {
  @operation({
    summary: "Get Fcx",
  })
  @get()
  static getFcx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcx",
  })
  @post("{id}")
  static createFcx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
