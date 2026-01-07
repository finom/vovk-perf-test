import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjj")
export default class JjjController {
  @operation({
    summary: "Get Jjj",
  })
  @get()
  static getJjj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjj",
  })
  @post("{id}")
  static createJjj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
