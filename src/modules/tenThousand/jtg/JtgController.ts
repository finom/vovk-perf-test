import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jtg")
export default class JtgController {
  @operation({
    summary: "Get Jtg",
  })
  @get()
  static getJtg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jtg",
  })
  @post("{id}")
  static createJtg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
