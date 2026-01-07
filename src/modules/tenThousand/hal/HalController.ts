import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hal")
export default class HalController {
  @operation({
    summary: "Get Hal",
  })
  @get()
  static getHal = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hal",
  })
  @post("{id}")
  static createHal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
