import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eufs")
export default class EufController {
  @operation({
    summary: "Get Eufs",
  })
  @get()
  static getEufs = procedure({
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
