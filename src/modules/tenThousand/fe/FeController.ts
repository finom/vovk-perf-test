import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fe")
export default class FeController {
  @operation({
    summary: "Get Fe",
  })
  @get()
  static getFe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fe",
  })
  @post("{id}")
  static createFe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
