import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhns")
export default class LhnController {
  @operation({
    summary: "Get Lhns",
  })
  @get()
  static getLhns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhn",
  })
  @post("{id}")
  static createLhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
