import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blos")
export default class BloController {
  @operation({
    summary: "Get Blos",
  })
  @get()
  static getBlos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Blo",
  })
  @post("{id}")
  static createBlo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
