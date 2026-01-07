import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jiz")
export default class JizController {
  @operation({
    summary: "Get Jiz",
  })
  @get()
  static getJiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jiz",
  })
  @post("{id}")
  static createJiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
