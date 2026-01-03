import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebqs")
export default class EbqController {
  @operation({
    summary: "Get Ebqs",
  })
  @get()
  static getEbqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ebq",
  })
  @post("{id}")
  static createEbq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
