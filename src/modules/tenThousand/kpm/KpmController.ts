import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpms")
export default class KpmController {
  @operation({
    summary: "Get Kpms",
  })
  @get()
  static getKpms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpm",
  })
  @post("{id}")
  static createKpm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
