import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhos")
export default class BhoController {
  @operation({
    summary: "Get Bhos",
  })
  @get()
  static getBhos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bho",
  })
  @post("{id}")
  static createBho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
