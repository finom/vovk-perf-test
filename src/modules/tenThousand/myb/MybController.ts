import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myb")
export default class MybController {
  @operation({
    summary: "Get Myb",
  })
  @get()
  static getMyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myb",
  })
  @post("{id}")
  static createMyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
