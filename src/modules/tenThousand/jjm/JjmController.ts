import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjm")
export default class JjmController {
  @operation({
    summary: "Get Jjm",
  })
  @get()
  static getJjm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jjm",
  })
  @post("{id}")
  static createJjm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
