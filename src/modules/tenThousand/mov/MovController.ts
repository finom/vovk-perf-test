import { procedure, prefix, get, post, operation } from "vovk";

@prefix("movs")
export default class MovController {
  @operation({
    summary: "Get Movs",
  })
  @get()
  static getMovs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mov",
  })
  @post("{id}")
  static createMov = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
