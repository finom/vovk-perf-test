import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gno")
export default class GnoController {
  @operation({
    summary: "Get Gno",
  })
  @get()
  static getGno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gno",
  })
  @post("{id}")
  static createGno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
