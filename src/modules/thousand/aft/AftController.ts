import { procedure, prefix, get, post, operation } from "vovk";

@prefix("afts")
export default class AftController {
  @operation({
    summary: "Get Afts",
  })
  @get()
  static getAfts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aft",
  })
  @post("{id}")
  static createAft = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
