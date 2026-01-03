import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahs")
export default class AhController {
  @operation({
    summary: "Get Ahs",
  })
  @get()
  static getAhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ah",
  })
  @post("{id}")
  static createAh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
