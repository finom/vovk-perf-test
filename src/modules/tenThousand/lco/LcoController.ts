import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lcos")
export default class LcoController {
  @operation({
    summary: "Get Lcos",
  })
  @get()
  static getLcos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lco",
  })
  @post("{id}")
  static createLco = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
