import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqb")
export default class LqbController {
  @operation({
    summary: "Get Lqb",
  })
  @get()
  static getLqb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqb",
  })
  @post("{id}")
  static createLqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
