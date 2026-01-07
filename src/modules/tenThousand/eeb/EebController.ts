import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eeb")
export default class EebController {
  @operation({
    summary: "Get Eeb",
  })
  @get()
  static getEeb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eeb",
  })
  @post("{id}")
  static createEeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
