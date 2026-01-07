import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emk")
export default class EmkController {
  @operation({
    summary: "Get Emk",
  })
  @get()
  static getEmk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Emk",
  })
  @post("{id}")
  static createEmk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
