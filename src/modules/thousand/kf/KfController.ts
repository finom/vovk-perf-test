import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kf")
export default class KfController {
  @operation({
    summary: "Get Kf",
  })
  @get()
  static getKf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kf",
  })
  @post("{id}")
  static createKf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
