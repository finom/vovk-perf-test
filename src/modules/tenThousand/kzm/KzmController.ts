import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzms")
export default class KzmController {
  @operation({
    summary: "Get Kzms",
  })
  @get()
  static getKzms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kzm",
  })
  @post("{id}")
  static createKzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
