import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hgy")
export default class HgyController {
  @operation({
    summary: "Get Hgy",
  })
  @get()
  static getHgy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgy",
  })
  @post("{id}")
  static createHgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
