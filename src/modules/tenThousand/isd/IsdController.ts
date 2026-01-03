import { procedure, prefix, get, post, operation } from "vovk";

@prefix("isds")
export default class IsdController {
  @operation({
    summary: "Get Isds",
  })
  @get()
  static getIsds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Isd",
  })
  @post("{id}")
  static createIsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
