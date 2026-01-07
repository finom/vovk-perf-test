import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jrt")
export default class JrtController {
  @operation({
    summary: "Get Jrt",
  })
  @get()
  static getJrt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jrt",
  })
  @post("{id}")
  static createJrt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
