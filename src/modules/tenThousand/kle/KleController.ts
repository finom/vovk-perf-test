import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kles")
export default class KleController {
  @operation({
    summary: "Get Kles",
  })
  @get()
  static getKles = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kle",
  })
  @post("{id}")
  static createKle = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
