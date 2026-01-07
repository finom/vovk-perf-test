import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdb")
export default class MdbController {
  @operation({
    summary: "Get Mdb",
  })
  @get()
  static getMdb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mdb",
  })
  @post("{id}")
  static createMdb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
