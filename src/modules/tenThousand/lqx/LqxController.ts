import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqxes")
export default class LqxController {
  @operation({
    summary: "Get Lqxes",
  })
  @get()
  static getLqxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqx",
  })
  @post("{id}")
  static createLqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
