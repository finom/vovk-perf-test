import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjy")
export default class CjyController {
  @operation({
    summary: "Get Cjy",
  })
  @get()
  static getCjy = procedure({
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
