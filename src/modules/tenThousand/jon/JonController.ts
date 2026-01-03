import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jons")
export default class JonController {
  @operation({
    summary: "Get Jons",
  })
  @get()
  static getJons = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jon",
  })
  @post("{id}")
  static createJon = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
