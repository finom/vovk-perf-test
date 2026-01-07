import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqd")
export default class LqdController {
  @operation({
    summary: "Get Lqd",
  })
  @get()
  static getLqd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqd",
  })
  @post("{id}")
  static createLqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
