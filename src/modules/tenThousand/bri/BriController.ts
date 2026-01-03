import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bris")
export default class BriController {
  @operation({
    summary: "Get Bris",
  })
  @get()
  static getBris = procedure({
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
