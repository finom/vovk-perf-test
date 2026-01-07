import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqr")
export default class LqrController {
  @operation({
    summary: "Get Lqr",
  })
  @get()
  static getLqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqr",
  })
  @post("{id}")
  static createLqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
