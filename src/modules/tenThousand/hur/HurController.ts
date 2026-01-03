import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hurs")
export default class HurController {
  @operation({
    summary: "Get Hurs",
  })
  @get()
  static getHurs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hur",
  })
  @post("{id}")
  static createHur = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
