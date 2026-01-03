import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehns")
export default class EhnController {
  @operation({
    summary: "Get Ehns",
  })
  @get()
  static getEhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehn",
  })
  @post("{id}")
  static createEhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
