import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aeqs")
export default class AeqController {
  @operation({
    summary: "Get Aeqs",
  })
  @get()
  static getAeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aeq",
  })
  @post("{id}")
  static createAeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
