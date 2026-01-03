import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghhs")
export default class GhhController {
  @operation({
    summary: "Get Ghhs",
  })
  @get()
  static getGhhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghh",
  })
  @post("{id}")
  static createGhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
