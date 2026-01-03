import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hggs")
export default class HggController {
  @operation({
    summary: "Get Hggs",
  })
  @get()
  static getHggs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hgg",
  })
  @post("{id}")
  static createHgg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
