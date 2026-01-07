import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csx")
export default class CsxController {
  @operation({
    summary: "Get Csx",
  })
  @get()
  static getCsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csx",
  })
  @post("{id}")
  static createCsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
