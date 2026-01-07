import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abw")
export default class AbwController {
  @operation({
    summary: "Get Abw",
  })
  @get()
  static getAbw = procedure({
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
