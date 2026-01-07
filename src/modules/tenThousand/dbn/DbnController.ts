import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbn")
export default class DbnController {
  @operation({
    summary: "Get Dbn",
  })
  @get()
  static getDbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbn",
  })
  @post("{id}")
  static createDbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
