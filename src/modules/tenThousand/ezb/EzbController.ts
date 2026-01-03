import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezbs")
export default class EzbController {
  @operation({
    summary: "Get Ezbs",
  })
  @get()
  static getEzbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ezb",
  })
  @post("{id}")
  static createEzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
