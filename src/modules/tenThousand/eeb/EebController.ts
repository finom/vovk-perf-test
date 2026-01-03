import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eebs")
export default class EebController {
  @operation({
    summary: "Get Eebs",
  })
  @get()
  static getEebs = procedure({
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
