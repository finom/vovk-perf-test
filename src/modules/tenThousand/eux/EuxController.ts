import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eux")
export default class EuxController {
  @operation({
    summary: "Get Eux",
  })
  @get()
  static getEux = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eux",
  })
  @post("{id}")
  static createEux = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
