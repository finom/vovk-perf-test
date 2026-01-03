import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjrs")
export default class CjrController {
  @operation({
    summary: "Get Cjrs",
  })
  @get()
  static getCjrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjr",
  })
  @post("{id}")
  static createCjr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
