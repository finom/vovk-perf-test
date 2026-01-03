import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jebs")
export default class JebController {
  @operation({
    summary: "Get Jebs",
  })
  @get()
  static getJebs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jeb",
  })
  @post("{id}")
  static createJeb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
