import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqz")
export default class LqzController {
  @operation({
    summary: "Get Lqz",
  })
  @get()
  static getLqz = procedure({
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
