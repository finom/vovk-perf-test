import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joq")
export default class JoqController {
  @operation({
    summary: "Get Joq",
  })
  @get()
  static getJoq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joq",
  })
  @post("{id}")
  static createJoq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
