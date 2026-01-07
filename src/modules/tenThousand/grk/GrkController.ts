import { procedure, prefix, get, post, operation } from "vovk";

@prefix("grk")
export default class GrkController {
  @operation({
    summary: "Get Grk",
  })
  @get()
  static getGrk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Grk",
  })
  @post("{id}")
  static createGrk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
