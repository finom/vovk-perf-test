import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pd")
export default class PdController {
  @operation({
    summary: "Get Pd",
  })
  @get()
  static getPd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Pd",
  })
  @post("{id}")
  static createPd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
