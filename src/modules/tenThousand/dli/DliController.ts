import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dli")
export default class DliController {
  @operation({
    summary: "Get Dli",
  })
  @get()
  static getDli = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dli",
  })
  @post("{id}")
  static createDli = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
