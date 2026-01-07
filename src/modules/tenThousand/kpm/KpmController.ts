import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpm")
export default class KpmController {
  @operation({
    summary: "Get Kpm",
  })
  @get()
  static getKpm = procedure({
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
