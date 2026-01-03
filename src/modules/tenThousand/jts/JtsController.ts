import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jts")
export default class JtsController {
  @operation({
    summary: "Get Jts",
  })
  @get()
  static getJts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jts",
  })
  @post("{id}")
  static createJts = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
