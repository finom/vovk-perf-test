import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aky")
export default class AkyController {
  @operation({
    summary: "Get Aky",
  })
  @get()
  static getAky = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aky",
  })
  @post("{id}")
  static createAky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
