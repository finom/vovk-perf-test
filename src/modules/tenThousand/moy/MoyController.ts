import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moys")
export default class MoyController {
  @operation({
    summary: "Get Moys",
  })
  @get()
  static getMoys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moy",
  })
  @post("{id}")
  static createMoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
