import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lel")
export default class LelController {
  @operation({
    summary: "Get Lel",
  })
  @get()
  static getLel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lel",
  })
  @post("{id}")
  static createLel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
