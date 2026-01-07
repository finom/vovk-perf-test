import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gob")
export default class GobController {
  @operation({
    summary: "Get Gob",
  })
  @get()
  static getGob = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gob",
  })
  @post("{id}")
  static createGob = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
