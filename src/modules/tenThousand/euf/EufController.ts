import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euf")
export default class EufController {
  @operation({
    summary: "Get Euf",
  })
  @get()
  static getEuf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euf",
  })
  @post("{id}")
  static createEuf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
