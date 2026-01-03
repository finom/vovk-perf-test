import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apws")
export default class ApwController {
  @operation({
    summary: "Get Apws",
  })
  @get()
  static getApws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apw",
  })
  @post("{id}")
  static createApw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
