import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwh")
export default class LwhController {
  @operation({
    summary: "Get Lwh",
  })
  @get()
  static getLwh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwh",
  })
  @post("{id}")
  static createLwh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
