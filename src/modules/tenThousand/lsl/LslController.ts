import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsl")
export default class LslController {
  @operation({
    summary: "Get Lsl",
  })
  @get()
  static getLsl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lsl",
  })
  @post("{id}")
  static createLsl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
