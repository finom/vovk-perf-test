import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mcs")
export default class McController {
  @operation({
    summary: "Get Mcs",
  })
  @get()
  static getMcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mc",
  })
  @post("{id}")
  static createMc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
