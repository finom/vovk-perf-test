import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jon")
export default class JonController {
  @operation({
    summary: "Get Jon",
  })
  @get()
  static getJon = procedure({
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
