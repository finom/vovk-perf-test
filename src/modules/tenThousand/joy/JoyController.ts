import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joy")
export default class JoyController {
  @operation({
    summary: "Get Joy",
  })
  @get()
  static getJoy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joy",
  })
  @post("{id}")
  static createJoy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
