import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ne")
export default class NeController {
  @operation({
    summary: "Get Ne",
  })
  @get()
  static getNe = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ne",
  })
  @post("{id}")
  static createNe = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
