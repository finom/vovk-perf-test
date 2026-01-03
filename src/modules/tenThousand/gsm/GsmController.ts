import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gsms")
export default class GsmController {
  @operation({
    summary: "Get Gsms",
  })
  @get()
  static getGsms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gsm",
  })
  @post("{id}")
  static createGsm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
