import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uns")
export default class UnController {
  @operation({
    summary: "Get Uns",
  })
  @get()
  static getUns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Un",
  })
  @post("{id}")
  static createUn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
