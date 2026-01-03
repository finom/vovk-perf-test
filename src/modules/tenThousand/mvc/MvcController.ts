import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvcs")
export default class MvcController {
  @operation({
    summary: "Get Mvcs",
  })
  @get()
  static getMvcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mvc",
  })
  @post("{id}")
  static createMvc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
