import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqk")
export default class LqkController {
  @operation({
    summary: "Get Lqk",
  })
  @get()
  static getLqk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqk",
  })
  @post("{id}")
  static createLqk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
