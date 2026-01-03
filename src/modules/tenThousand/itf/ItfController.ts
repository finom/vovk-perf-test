import { procedure, prefix, get, post, operation } from "vovk";

@prefix("itfs")
export default class ItfController {
  @operation({
    summary: "Get Itfs",
  })
  @get()
  static getItfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Itf",
  })
  @post("{id}")
  static createItf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
