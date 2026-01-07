import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ccw")
export default class CcwController {
  @operation({
    summary: "Get Ccw",
  })
  @get()
  static getCcw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccw",
  })
  @post("{id}")
  static createCcw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
