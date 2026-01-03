import { procedure, prefix, get, post, operation } from "vovk";

@prefix("akies")
export default class AkyController {
  @operation({
    summary: "Get Akies",
  })
  @get()
  static getAkies = procedure({
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
