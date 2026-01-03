import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fus")
export default class FuController {
  @operation({
    summary: "Get Fus",
  })
  @get()
  static getFus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fu",
  })
  @post("{id}")
  static createFu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
