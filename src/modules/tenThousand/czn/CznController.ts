import { procedure, prefix, get, post, operation } from "vovk";

@prefix("czn")
export default class CznController {
  @operation({
    summary: "Get Czn",
  })
  @get()
  static getCzn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Czn",
  })
  @post("{id}")
  static createCzn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
