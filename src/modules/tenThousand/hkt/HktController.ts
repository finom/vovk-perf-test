import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkt")
export default class HktController {
  @operation({
    summary: "Get Hkt",
  })
  @get()
  static getHkt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hkt",
  })
  @post("{id}")
  static createHkt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
