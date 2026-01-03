import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iays")
export default class IayController {
  @operation({
    summary: "Get Iays",
  })
  @get()
  static getIays = procedure({
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
