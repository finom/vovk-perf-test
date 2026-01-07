import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hel")
export default class HelController {
  @operation({
    summary: "Get Hel",
  })
  @get()
  static getHel = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hel",
  })
  @post("{id}")
  static createHel = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
