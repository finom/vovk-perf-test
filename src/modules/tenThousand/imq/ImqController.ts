import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imqs")
export default class ImqController {
  @operation({
    summary: "Get Imqs",
  })
  @get()
  static getImqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imq",
  })
  @post("{id}")
  static createImq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
