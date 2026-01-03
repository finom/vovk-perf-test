import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ins")
export default class InsController {
  @operation({
    summary: "Get Ins",
  })
  @get()
  static getIns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ins",
  })
  @post("{id}")
  static createIns = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
