import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huz")
export default class HuzController {
  @operation({
    summary: "Get Huz",
  })
  @get()
  static getHuz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huz",
  })
  @post("{id}")
  static createHuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
