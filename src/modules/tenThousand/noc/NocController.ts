import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noc")
export default class NocController {
  @operation({
    summary: "Get Noc",
  })
  @get()
  static getNoc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Noc",
  })
  @post("{id}")
  static createNoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
