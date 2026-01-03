import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ics")
export default class IcsController {
  @operation({
    summary: "Get Ics",
  })
  @get()
  static getIcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ics",
  })
  @post("{id}")
  static createIcs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
