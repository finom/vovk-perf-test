import { procedure, prefix, get, post, operation } from "vovk";

@prefix("heqs")
export default class HeqController {
  @operation({
    summary: "Get Heqs",
  })
  @get()
  static getHeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Heq",
  })
  @post("{id}")
  static createHeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
