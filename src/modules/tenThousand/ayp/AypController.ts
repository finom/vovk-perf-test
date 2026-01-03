import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ayps")
export default class AypController {
  @operation({
    summary: "Get Ayps",
  })
  @get()
  static getAyps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ayp",
  })
  @post("{id}")
  static createAyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
