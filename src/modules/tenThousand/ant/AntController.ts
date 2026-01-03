import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ants")
export default class AntController {
  @operation({
    summary: "Get Ants",
  })
  @get()
  static getAnts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ant",
  })
  @post("{id}")
  static createAnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
