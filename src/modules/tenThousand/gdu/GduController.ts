import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdus")
export default class GduController {
  @operation({
    summary: "Get Gdus",
  })
  @get()
  static getGdus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdu",
  })
  @post("{id}")
  static createGdu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
