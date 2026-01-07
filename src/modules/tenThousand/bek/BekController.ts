import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bek")
export default class BekController {
  @operation({
    summary: "Get Bek",
  })
  @get()
  static getBek = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bek",
  })
  @post("{id}")
  static createBek = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
