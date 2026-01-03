import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muhs")
export default class MuhController {
  @operation({
    summary: "Get Muhs",
  })
  @get()
  static getMuhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Muh",
  })
  @post("{id}")
  static createMuh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
