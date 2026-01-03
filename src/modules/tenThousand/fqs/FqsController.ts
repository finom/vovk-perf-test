import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fqs")
export default class FqsController {
  @operation({
    summary: "Get Fqs",
  })
  @get()
  static getFqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fqs",
  })
  @post("{id}")
  static createFqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
