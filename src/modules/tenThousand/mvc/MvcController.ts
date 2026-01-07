import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mvc")
export default class MvcController {
  @operation({
    summary: "Get Mvc",
  })
  @get()
  static getMvc = procedure({
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
