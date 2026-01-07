import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bri")
export default class BriController {
  @operation({
    summary: "Get Bri",
  })
  @get()
  static getBri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bri",
  })
  @post("{id}")
  static createBri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
