import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iay")
export default class IayController {
  @operation({
    summary: "Get Iay",
  })
  @get()
  static getIay = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iay",
  })
  @post("{id}")
  static createIay = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
