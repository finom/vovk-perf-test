import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqhs")
export default class LqhController {
  @operation({
    summary: "Get Lqhs",
  })
  @get()
  static getLqhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqh",
  })
  @post("{id}")
  static createLqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
