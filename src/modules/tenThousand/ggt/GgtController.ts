import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ggt")
export default class GgtController {
  @operation({
    summary: "Get Ggt",
  })
  @get()
  static getGgt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ggt",
  })
  @post("{id}")
  static createGgt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
