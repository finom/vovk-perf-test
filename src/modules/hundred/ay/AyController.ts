import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ays")
export default class AyController {
  @operation({
    summary: "Get Ays",
  })
  @get()
  static getAys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ay",
  })
  @post("{id}")
  static createAy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
