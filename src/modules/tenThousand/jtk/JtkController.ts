import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtk")
export default class JtkController {
  @operation({
    summary: "Get Jtk",
  })
  @get()
  static getJtk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtk",
  })
  @post("{id}")
  static createJtk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
