import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alrs")
export default class AlrController {
  @operation({
    summary: "Get Alrs",
  })
  @get()
  static getAlrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Alr",
  })
  @post("{id}")
  static createAlr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
