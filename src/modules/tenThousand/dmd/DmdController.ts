import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmds")
export default class DmdController {
  @operation({
    summary: "Get Dmds",
  })
  @get()
  static getDmds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmd",
  })
  @post("{id}")
  static createDmd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
