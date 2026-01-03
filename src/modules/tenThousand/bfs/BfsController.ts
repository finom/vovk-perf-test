import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bfs")
export default class BfsController {
  @operation({
    summary: "Get Bfs",
  })
  @get()
  static getBfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bfs",
  })
  @post("{id}")
  static createBfs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
