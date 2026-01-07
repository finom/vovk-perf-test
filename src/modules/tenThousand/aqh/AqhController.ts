import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqh")
export default class AqhController {
  @operation({
    summary: "Get Aqh",
  })
  @get()
  static getAqh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Aqh",
  })
  @post("{id}")
  static createAqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
