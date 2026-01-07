import { procedure, prefix, get, post, operation } from "vovk";

@prefix("luw")
export default class LuwController {
  @operation({
    summary: "Get Luw",
  })
  @get()
  static getLuw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Luw",
  })
  @post("{id}")
  static createLuw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
