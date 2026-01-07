import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayk")
export default class AykController {
  @operation({
    summary: "Get Ayk",
  })
  @get()
  static getAyk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayk",
  })
  @post("{id}")
  static createAyk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
