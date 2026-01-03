import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mazs")
export default class MazController {
  @operation({
    summary: "Get Mazs",
  })
  @get()
  static getMazs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Maz",
  })
  @post("{id}")
  static createMaz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
