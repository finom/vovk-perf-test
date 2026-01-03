import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pws")
export default class PwController {
  @operation({
    summary: "Get Pws",
  })
  @get()
  static getPws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pw",
  })
  @post("{id}")
  static createPw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
