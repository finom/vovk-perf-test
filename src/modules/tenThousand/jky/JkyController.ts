import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jky")
export default class JkyController {
  @operation({
    summary: "Get Jky",
  })
  @get()
  static getJky = procedure({
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
