import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emqs")
export default class EmqController {
  @operation({
    summary: "Get Emqs",
  })
  @get()
  static getEmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emq",
  })
  @post("{id}")
  static createEmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
