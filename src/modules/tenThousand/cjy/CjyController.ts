import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjies")
export default class CjyController {
  @operation({
    summary: "Get Cjies",
  })
  @get()
  static getCjies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjy",
  })
  @post("{id}")
  static createCjy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
