import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abws")
export default class AbwController {
  @operation({
    summary: "Get Abws",
  })
  @get()
  static getAbws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abw",
  })
  @post("{id}")
  static createAbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
