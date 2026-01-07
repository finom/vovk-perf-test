import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpg")
export default class KpgController {
  @operation({
    summary: "Get Kpg",
  })
  @get()
  static getKpg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kpg",
  })
  @post("{id}")
  static createKpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
