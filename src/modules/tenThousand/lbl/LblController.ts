import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbl")
export default class LblController {
  @operation({
    summary: "Get Lbl",
  })
  @get()
  static getLbl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbl",
  })
  @post("{id}")
  static createLbl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
