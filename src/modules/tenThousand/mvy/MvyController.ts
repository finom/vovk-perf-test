import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvies")
export default class MvyController {
  @operation({
    summary: "Get Mvies",
  })
  @get()
  static getMvies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvy",
  })
  @post("{id}")
  static createMvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
