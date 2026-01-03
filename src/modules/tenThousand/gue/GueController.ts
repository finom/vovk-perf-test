import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gues")
export default class GueController {
  @operation({
    summary: "Get Gues",
  })
  @get()
  static getGues = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gue",
  })
  @post("{id}")
  static createGue = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
