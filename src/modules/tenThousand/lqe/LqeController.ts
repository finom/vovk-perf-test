import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqe")
export default class LqeController {
  @operation({
    summary: "Get Lqe",
  })
  @get()
  static getLqe = procedure({
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
