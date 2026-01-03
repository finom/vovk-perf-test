import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nbts")
export default class NbtController {
  @operation({
    summary: "Get Nbts",
  })
  @get()
  static getNbts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nbt",
  })
  @post("{id}")
  static createNbt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
