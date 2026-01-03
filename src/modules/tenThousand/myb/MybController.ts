import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mybs")
export default class MybController {
  @operation({
    summary: "Get Mybs",
  })
  @get()
  static getMybs = procedure({
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
