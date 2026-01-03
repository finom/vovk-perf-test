import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqms")
export default class LqmController {
  @operation({
    summary: "Get Lqms",
  })
  @get()
  static getLqms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqm",
  })
  @post("{id}")
  static createLqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
