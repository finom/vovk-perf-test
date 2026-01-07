import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcw")
export default class FcwController {
  @operation({
    summary: "Get Fcw",
  })
  @get()
  static getFcw = procedure({
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
