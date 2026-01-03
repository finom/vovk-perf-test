import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqws")
export default class LqwController {
  @operation({
    summary: "Get Lqws",
  })
  @get()
  static getLqws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqw",
  })
  @post("{id}")
  static createLqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
