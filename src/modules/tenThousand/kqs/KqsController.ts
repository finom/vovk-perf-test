import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kqs")
export default class KqsController {
  @operation({
    summary: "Get Kqs",
  })
  @get()
  static getKqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kqs",
  })
  @post("{id}")
  static createKqs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
