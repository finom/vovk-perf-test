import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jazs")
export default class JazController {
  @operation({
    summary: "Get Jazs",
  })
  @get()
  static getJazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jaz",
  })
  @post("{id}")
  static createJaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
