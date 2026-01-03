import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beqs")
export default class BeqController {
  @operation({
    summary: "Get Beqs",
  })
  @get()
  static getBeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beq",
  })
  @post("{id}")
  static createBeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
