import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvrs")
export default class MvrController {
  @operation({
    summary: "Get Mvrs",
  })
  @get()
  static getMvrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvr",
  })
  @post("{id}")
  static createMvr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
