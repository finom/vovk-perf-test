import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqr")
export default class HqrController {
  @operation({
    summary: "Get Hqr",
  })
  @get()
  static getHqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqr",
  })
  @post("{id}")
  static createHqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
