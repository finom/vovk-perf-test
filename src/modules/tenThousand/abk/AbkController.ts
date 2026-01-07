import { procedure, prefix, get, post, operation } from "vovk";

@prefix("abk")
export default class AbkController {
  @operation({
    summary: "Get Abk",
  })
  @get()
  static getAbk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Abk",
  })
  @post("{id}")
  static createAbk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
