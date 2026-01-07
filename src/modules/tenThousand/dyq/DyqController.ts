import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyq")
export default class DyqController {
  @operation({
    summary: "Get Dyq",
  })
  @get()
  static getDyq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyq",
  })
  @post("{id}")
  static createDyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
