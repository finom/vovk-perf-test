import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byf")
export default class ByfController {
  @operation({
    summary: "Get Byf",
  })
  @get()
  static getByf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byf",
  })
  @post("{id}")
  static createByf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
