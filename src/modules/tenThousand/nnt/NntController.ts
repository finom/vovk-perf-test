import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nnt")
export default class NntController {
  @operation({
    summary: "Get Nnt",
  })
  @get()
  static getNnt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nnt",
  })
  @post("{id}")
  static createNnt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
