import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jugs")
export default class JugController {
  @operation({
    summary: "Get Jugs",
  })
  @get()
  static getJugs = procedure({
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
