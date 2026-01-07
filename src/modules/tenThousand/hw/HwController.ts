import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hw")
export default class HwController {
  @operation({
    summary: "Get Hw",
  })
  @get()
  static getHw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hw",
  })
  @post("{id}")
  static createHw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
