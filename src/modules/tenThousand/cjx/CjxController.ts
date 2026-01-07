import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjx")
export default class CjxController {
  @operation({
    summary: "Get Cjx",
  })
  @get()
  static getCjx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjx",
  })
  @post("{id}")
  static createCjx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
