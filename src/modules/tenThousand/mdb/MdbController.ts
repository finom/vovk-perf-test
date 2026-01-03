import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdbs")
export default class MdbController {
  @operation({
    summary: "Get Mdbs",
  })
  @get()
  static getMdbs = procedure({
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
