import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqrs")
export default class LqrController {
  @operation({
    summary: "Get Lqrs",
  })
  @get()
  static getLqrs = procedure({
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
