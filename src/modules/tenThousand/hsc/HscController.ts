import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsc")
export default class HscController {
  @operation({
    summary: "Get Hsc",
  })
  @get()
  static getHsc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsc",
  })
  @post("{id}")
  static createHsc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
