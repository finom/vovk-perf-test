import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbw")
export default class HbwController {
  @operation({
    summary: "Get Hbw",
  })
  @get()
  static getHbw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbw",
  })
  @post("{id}")
  static createHbw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
