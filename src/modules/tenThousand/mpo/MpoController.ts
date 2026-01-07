import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpo")
export default class MpoController {
  @operation({
    summary: "Get Mpo",
  })
  @get()
  static getMpo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpo",
  })
  @post("{id}")
  static createMpo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
