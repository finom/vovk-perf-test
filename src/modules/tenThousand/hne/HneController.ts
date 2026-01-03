import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hnes")
export default class HneController {
  @operation({
    summary: "Get Hnes",
  })
  @get()
  static getHnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hne",
  })
  @post("{id}")
  static createHne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
