import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkies")
export default class JkyController {
  @operation({
    summary: "Get Jkies",
  })
  @get()
  static getJkies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jky",
  })
  @post("{id}")
  static createJky = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
