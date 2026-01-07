import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pu")
export default class PuController {
  @operation({
    summary: "Get Pu",
  })
  @get()
  static getPu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pu",
  })
  @post("{id}")
  static createPu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
