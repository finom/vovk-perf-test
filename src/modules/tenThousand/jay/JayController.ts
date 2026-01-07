import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jay")
export default class JayController {
  @operation({
    summary: "Get Jay",
  })
  @get()
  static getJay = procedure({
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
