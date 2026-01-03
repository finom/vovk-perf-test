import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myps")
export default class MypController {
  @operation({
    summary: "Get Myps",
  })
  @get()
  static getMyps = procedure({
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
