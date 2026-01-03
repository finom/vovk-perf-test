import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahzs")
export default class AhzController {
  @operation({
    summary: "Get Ahzs",
  })
  @get()
  static getAhzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ahz",
  })
  @post("{id}")
  static createAhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
