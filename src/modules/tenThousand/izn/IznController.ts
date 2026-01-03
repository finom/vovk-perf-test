import { procedure, prefix, get, post, operation } from "vovk";

@prefix("izns")
export default class IznController {
  @operation({
    summary: "Get Izns",
  })
  @get()
  static getIzns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Izn",
  })
  @post("{id}")
  static createIzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
