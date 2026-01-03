import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jays")
export default class JayController {
  @operation({
    summary: "Get Jays",
  })
  @get()
  static getJays = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jay",
  })
  @post("{id}")
  static createJay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
