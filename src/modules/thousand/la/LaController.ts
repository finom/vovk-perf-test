import { procedure, prefix, get, post, operation } from "vovk";

@prefix("la")
export default class LaController {
  @operation({
    summary: "Get La",
  })
  @get()
  static getLa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create La",
  })
  @post("{id}")
  static createLa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
