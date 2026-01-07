import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jef")
export default class JefController {
  @operation({
    summary: "Get Jef",
  })
  @get()
  static getJef = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jef",
  })
  @post("{id}")
  static createJef = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
