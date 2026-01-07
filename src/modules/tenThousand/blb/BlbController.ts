import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blb")
export default class BlbController {
  @operation({
    summary: "Get Blb",
  })
  @get()
  static getBlb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blb",
  })
  @post("{id}")
  static createBlb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
