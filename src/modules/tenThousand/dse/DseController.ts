import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dse")
export default class DseController {
  @operation({
    summary: "Get Dse",
  })
  @get()
  static getDse = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dse",
  })
  @post("{id}")
  static createDse = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
