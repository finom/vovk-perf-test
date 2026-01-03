import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mits")
export default class MitController {
  @operation({
    summary: "Get Mits",
  })
  @get()
  static getMits = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mit",
  })
  @post("{id}")
  static createMit = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
