import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahws")
export default class AhwController {
  @operation({
    summary: "Get Ahws",
  })
  @get()
  static getAhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahw",
  })
  @post("{id}")
  static createAhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
