import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlves")
export default class HlfController {
  @operation({
    summary: "Get Hlves",
  })
  @get()
  static getHlves = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hlf",
  })
  @post("{id}")
  static createHlf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
