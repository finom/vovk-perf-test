import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhx")
export default class JhxController {
  @operation({
    summary: "Get Jhx",
  })
  @get()
  static getJhx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhx",
  })
  @post("{id}")
  static createJhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
