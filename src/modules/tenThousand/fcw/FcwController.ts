import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcws")
export default class FcwController {
  @operation({
    summary: "Get Fcws",
  })
  @get()
  static getFcws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fcw",
  })
  @post("{id}")
  static createFcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
