import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ego")
export default class EgoController {
  @operation({
    summary: "Get Ego",
  })
  @get()
  static getEgo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ego",
  })
  @post("{id}")
  static createEgo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
