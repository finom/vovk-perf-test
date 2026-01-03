import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksps")
export default class KspController {
  @operation({
    summary: "Get Ksps",
  })
  @get()
  static getKsps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ksp",
  })
  @post("{id}")
  static createKsp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
