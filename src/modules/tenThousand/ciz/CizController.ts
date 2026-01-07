import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ciz")
export default class CizController {
  @operation({
    summary: "Get Ciz",
  })
  @get()
  static getCiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ciz",
  })
  @post("{id}")
  static createCiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
