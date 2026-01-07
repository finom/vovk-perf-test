import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myv")
export default class MyvController {
  @operation({
    summary: "Get Myv",
  })
  @get()
  static getMyv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myv",
  })
  @post("{id}")
  static createMyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
