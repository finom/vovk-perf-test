import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ikk")
export default class IkkController {
  @operation({
    summary: "Get Ikk",
  })
  @get()
  static getIkk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ikk",
  })
  @post("{id}")
  static createIkk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
