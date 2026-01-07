import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dwy")
export default class DwyController {
  @operation({
    summary: "Get Dwy",
  })
  @get()
  static getDwy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dwy",
  })
  @post("{id}")
  static createDwy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
