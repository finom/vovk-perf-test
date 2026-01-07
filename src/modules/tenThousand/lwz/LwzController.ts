import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwz")
export default class LwzController {
  @operation({
    summary: "Get Lwz",
  })
  @get()
  static getLwz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lwz",
  })
  @post("{id}")
  static createLwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
