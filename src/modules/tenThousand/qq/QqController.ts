import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qqs")
export default class QqController {
  @operation({
    summary: "Get Qqs",
  })
  @get()
  static getQqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qq",
  })
  @post("{id}")
  static createQq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
