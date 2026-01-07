import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahh")
export default class AhhController {
  @operation({
    summary: "Get Ahh",
  })
  @get()
  static getAhh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahh",
  })
  @post("{id}")
  static createAhh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
