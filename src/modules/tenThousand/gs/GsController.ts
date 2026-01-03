import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gs")
export default class GsController {
  @operation({
    summary: "Get Gs",
  })
  @get()
  static getGs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gs",
  })
  @post("{id}")
  static createGs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
