import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvy")
export default class LvyController {
  @operation({
    summary: "Get Lvy",
  })
  @get()
  static getLvy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvy",
  })
  @post("{id}")
  static createLvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
