import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyps")
export default class JypController {
  @operation({
    summary: "Get Jyps",
  })
  @get()
  static getJyps = procedure({
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
