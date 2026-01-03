import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqzs")
export default class LqzController {
  @operation({
    summary: "Get Lqzs",
  })
  @get()
  static getLqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqz",
  })
  @post("{id}")
  static createLqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
