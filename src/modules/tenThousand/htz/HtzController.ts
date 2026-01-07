import { procedure, prefix, get, post, operation } from "vovk";

@prefix("htz")
export default class HtzController {
  @operation({
    summary: "Get Htz",
  })
  @get()
  static getHtz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Htz",
  })
  @post("{id}")
  static createHtz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
