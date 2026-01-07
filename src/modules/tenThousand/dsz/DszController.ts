import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsz")
export default class DszController {
  @operation({
    summary: "Get Dsz",
  })
  @get()
  static getDsz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dsz",
  })
  @post("{id}")
  static createDsz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
