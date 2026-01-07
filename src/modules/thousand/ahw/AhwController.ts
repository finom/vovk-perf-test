import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahw")
export default class AhwController {
  @operation({
    summary: "Get Ahw",
  })
  @get()
  static getAhw = procedure({
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
