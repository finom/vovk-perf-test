import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqvs")
export default class LqvController {
  @operation({
    summary: "Get Lqvs",
  })
  @get()
  static getLqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqv",
  })
  @post("{id}")
  static createLqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
