import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lal")
export default class LalController {
  @operation({
    summary: "Get Lal",
  })
  @get()
  static getLal = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lal",
  })
  @post("{id}")
  static createLal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
