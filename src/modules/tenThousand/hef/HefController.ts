import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hef")
export default class HefController {
  @operation({
    summary: "Get Hef",
  })
  @get()
  static getHef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hef",
  })
  @post("{id}")
  static createHef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
