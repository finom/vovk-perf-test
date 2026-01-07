import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myf")
export default class MyfController {
  @operation({
    summary: "Get Myf",
  })
  @get()
  static getMyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myf",
  })
  @post("{id}")
  static createMyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
