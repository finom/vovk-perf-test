import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myys")
export default class MyyController {
  @operation({
    summary: "Get Myys",
  })
  @get()
  static getMyys = procedure({
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
