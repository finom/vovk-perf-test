import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joos")
export default class JooController {
  @operation({
    summary: "Get Joos",
  })
  @get()
  static getJoos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joo",
  })
  @post("{id}")
  static createJoo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
