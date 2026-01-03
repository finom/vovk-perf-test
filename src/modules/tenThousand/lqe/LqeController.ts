import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqes")
export default class LqeController {
  @operation({
    summary: "Get Lqes",
  })
  @get()
  static getLqes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqe",
  })
  @post("{id}")
  static createLqe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
