import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nw")
export default class NwController {
  @operation({
    summary: "Get Nw",
  })
  @get()
  static getNw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nw",
  })
  @post("{id}")
  static createNw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
