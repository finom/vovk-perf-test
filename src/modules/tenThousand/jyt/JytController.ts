import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyt")
export default class JytController {
  @operation({
    summary: "Get Jyt",
  })
  @get()
  static getJyt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jyt",
  })
  @post("{id}")
  static createJyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
