import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyh")
export default class EyhController {
  @operation({
    summary: "Get Eyh",
  })
  @get()
  static getEyh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eyh",
  })
  @post("{id}")
  static createEyh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
