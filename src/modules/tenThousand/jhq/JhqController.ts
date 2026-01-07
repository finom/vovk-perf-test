import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhq")
export default class JhqController {
  @operation({
    summary: "Get Jhq",
  })
  @get()
  static getJhq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jhq",
  })
  @post("{id}")
  static createJhq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
