import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqies")
export default class LqyController {
  @operation({
    summary: "Get Lqies",
  })
  @get()
  static getLqies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqy",
  })
  @post("{id}")
  static createLqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
