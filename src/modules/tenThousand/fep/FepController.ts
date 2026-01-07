import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fep")
export default class FepController {
  @operation({
    summary: "Get Fep",
  })
  @get()
  static getFep = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fep",
  })
  @post("{id}")
  static createFep = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
