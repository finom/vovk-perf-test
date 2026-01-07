import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myp")
export default class MypController {
  @operation({
    summary: "Get Myp",
  })
  @get()
  static getMyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myp",
  })
  @post("{id}")
  static createMyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
