import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiws")
export default class FiwController {
  @operation({
    summary: "Get Fiws",
  })
  @get()
  static getFiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiw",
  })
  @post("{id}")
  static createFiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
