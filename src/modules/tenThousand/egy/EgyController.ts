import { procedure, prefix, get, post, operation } from "vovk";

@prefix("egies")
export default class EgyController {
  @operation({
    summary: "Get Egies",
  })
  @get()
  static getEgies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Egy",
  })
  @post("{id}")
  static createEgy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
