import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jil")
export default class JilController {
  @operation({
    summary: "Get Jil",
  })
  @get()
  static getJil = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jil",
  })
  @post("{id}")
  static createJil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
