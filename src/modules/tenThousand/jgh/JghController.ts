import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgh")
export default class JghController {
  @operation({
    summary: "Get Jgh",
  })
  @get()
  static getJgh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgh",
  })
  @post("{id}")
  static createJgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
