import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hies")
export default class HieController {
  @operation({
    summary: "Get Hies",
  })
  @get()
  static getHies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hie",
  })
  @post("{id}")
  static createHie = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
