import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ay")
export default class AyController {
  @operation({
    summary: "Get Ay",
  })
  @get()
  static getAy = procedure({
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
