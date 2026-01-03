import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joqs")
export default class JoqController {
  @operation({
    summary: "Get Joqs",
  })
  @get()
  static getJoqs = procedure({
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
