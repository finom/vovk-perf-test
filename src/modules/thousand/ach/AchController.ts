import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ach")
export default class AchController {
  @operation({
    summary: "Get Ach",
  })
  @get()
  static getAch = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ach",
  })
  @post("{id}")
  static createAch = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
