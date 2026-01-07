import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbn")
export default class NbnController {
  @operation({
    summary: "Get Nbn",
  })
  @get()
  static getNbn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbn",
  })
  @post("{id}")
  static createNbn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
