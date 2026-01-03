import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lys")
export default class LysController {
  @operation({
    summary: "Get Lys",
  })
  @get()
  static getLys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lys",
  })
  @post("{id}")
  static createLys = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
