import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jj")
export default class JjController {
  @operation({
    summary: "Get Jj",
  })
  @get()
  static getJj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jj",
  })
  @post("{id}")
  static createJj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
