import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dizs")
export default class DizController {
  @operation({
    summary: "Get Dizs",
  })
  @get()
  static getDizs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Diz",
  })
  @post("{id}")
  static createDiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
