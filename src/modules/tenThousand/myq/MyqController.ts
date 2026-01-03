import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myqs")
export default class MyqController {
  @operation({
    summary: "Get Myqs",
  })
  @get()
  static getMyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myq",
  })
  @post("{id}")
  static createMyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
