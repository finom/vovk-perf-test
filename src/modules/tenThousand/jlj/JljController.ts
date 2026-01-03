import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jljs")
export default class JljController {
  @operation({
    summary: "Get Jljs",
  })
  @get()
  static getJljs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlj",
  })
  @post("{id}")
  static createJlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
