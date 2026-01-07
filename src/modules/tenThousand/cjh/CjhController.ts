import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjh")
export default class CjhController {
  @operation({
    summary: "Get Cjh",
  })
  @get()
  static getCjh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjh",
  })
  @post("{id}")
  static createCjh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
