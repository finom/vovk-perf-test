import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rs")
export default class RController {
  @operation({
    summary: "Get RS",
  })
  @get()
  static getRS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create R",
  })
  @post("{id}")
  static createR = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
