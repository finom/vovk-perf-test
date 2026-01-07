import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiz")
export default class FizController {
  @operation({
    summary: "Get Fiz",
  })
  @get()
  static getFiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fiz",
  })
  @post("{id}")
  static createFiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
