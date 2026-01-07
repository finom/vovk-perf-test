import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myy")
export default class MyyController {
  @operation({
    summary: "Get Myy",
  })
  @get()
  static getMyy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myy",
  })
  @post("{id}")
  static createMyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
