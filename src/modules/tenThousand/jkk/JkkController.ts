import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jkks")
export default class JkkController {
  @operation({
    summary: "Get Jkks",
  })
  @get()
  static getJkks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jkk",
  })
  @post("{id}")
  static createJkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
