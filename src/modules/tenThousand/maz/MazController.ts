import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maz")
export default class MazController {
  @operation({
    summary: "Get Maz",
  })
  @get()
  static getMaz = procedure({
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
