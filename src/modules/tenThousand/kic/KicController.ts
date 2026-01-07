import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kic")
export default class KicController {
  @operation({
    summary: "Get Kic",
  })
  @get()
  static getKic = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kic",
  })
  @post("{id}")
  static createKic = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
