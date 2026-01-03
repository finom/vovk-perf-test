import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jghs")
export default class JghController {
  @operation({
    summary: "Get Jghs",
  })
  @get()
  static getJghs = procedure({
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
