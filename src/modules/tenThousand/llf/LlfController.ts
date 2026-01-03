import { procedure, prefix, get, post, operation } from "vovk";

@prefix("llves")
export default class LlfController {
  @operation({
    summary: "Get Llves",
  })
  @get()
  static getLlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Llf",
  })
  @post("{id}")
  static createLlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
