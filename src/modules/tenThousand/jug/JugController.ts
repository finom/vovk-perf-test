import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jug")
export default class JugController {
  @operation({
    summary: "Get Jug",
  })
  @get()
  static getJug = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jug",
  })
  @post("{id}")
  static createJug = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
