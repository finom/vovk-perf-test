import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgx")
export default class FgxController {
  @operation({
    summary: "Get Fgx",
  })
  @get()
  static getFgx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgx",
  })
  @post("{id}")
  static createFgx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
