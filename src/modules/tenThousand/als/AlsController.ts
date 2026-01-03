import { procedure, prefix, get, post, operation } from "vovk";

@prefix("als")
export default class AlsController {
  @operation({
    summary: "Get Als",
  })
  @get()
  static getAls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Als",
  })
  @post("{id}")
  static createAls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
