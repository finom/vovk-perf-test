import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvr")
export default class MvrController {
  @operation({
    summary: "Get Mvr",
  })
  @get()
  static getMvr = procedure({
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
