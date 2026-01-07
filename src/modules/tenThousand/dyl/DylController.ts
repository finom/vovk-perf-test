import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyl")
export default class DylController {
  @operation({
    summary: "Get Dyl",
  })
  @get()
  static getDyl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyl",
  })
  @post("{id}")
  static createDyl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
