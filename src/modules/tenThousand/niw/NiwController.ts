import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niws")
export default class NiwController {
  @operation({
    summary: "Get Niws",
  })
  @get()
  static getNiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Niw",
  })
  @post("{id}")
  static createNiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
