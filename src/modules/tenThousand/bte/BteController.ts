import { procedure, prefix, get, post, operation } from "vovk";

@prefix("btes")
export default class BteController {
  @operation({
    summary: "Get Btes",
  })
  @get()
  static getBtes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bte",
  })
  @post("{id}")
  static createBte = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
