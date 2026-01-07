import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhy")
export default class LhyController {
  @operation({
    summary: "Get Lhy",
  })
  @get()
  static getLhy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhy",
  })
  @post("{id}")
  static createLhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
