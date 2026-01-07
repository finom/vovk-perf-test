import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbk")
export default class HbkController {
  @operation({
    summary: "Get Hbk",
  })
  @get()
  static getHbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hbk",
  })
  @post("{id}")
  static createHbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
