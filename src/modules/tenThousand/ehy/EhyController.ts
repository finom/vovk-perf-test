import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehies")
export default class EhyController {
  @operation({
    summary: "Get Ehies",
  })
  @get()
  static getEhies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ehy",
  })
  @post("{id}")
  static createEhy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
