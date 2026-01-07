import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyp")
export default class JypController {
  @operation({
    summary: "Get Jyp",
  })
  @get()
  static getJyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyp",
  })
  @post("{id}")
  static createJyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
