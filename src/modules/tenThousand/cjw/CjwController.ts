import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjws")
export default class CjwController {
  @operation({
    summary: "Get Cjws",
  })
  @get()
  static getCjws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cjw",
  })
  @post("{id}")
  static createCjw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
