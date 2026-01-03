import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ics")
export default class IcController {
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
    summary: "Create Ic",
  })
  @post("{id}")
  static createIc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
