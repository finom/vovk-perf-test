import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qs")
export default class QsController {
  @operation({
    summary: "Get Qs",
  })
  @get()
  static getQs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qs",
  })
  @post("{id}")
  static createQs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
