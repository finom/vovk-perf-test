import { procedure, prefix, get, post, operation } from "vovk";

@prefix("s")
export default class SController {
  @operation({
    summary: "Get S",
  })
  @get()
  static getS = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create S",
  })
  @post("{id}")
  static createS = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
