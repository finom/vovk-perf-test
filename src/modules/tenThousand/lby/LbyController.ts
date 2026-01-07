import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lby")
export default class LbyController {
  @operation({
    summary: "Get Lby",
  })
  @get()
  static getLby = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lby",
  })
  @post("{id}")
  static createLby = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
