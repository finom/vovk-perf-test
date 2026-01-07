import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqw")
export default class LqwController {
  @operation({
    summary: "Get Lqw",
  })
  @get()
  static getLqw = procedure({
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
