import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqgs")
export default class LqgController {
  @operation({
    summary: "Get Lqgs",
  })
  @get()
  static getLqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqg",
  })
  @post("{id}")
  static createLqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
