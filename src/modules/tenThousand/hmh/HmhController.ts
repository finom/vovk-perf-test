import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmhs")
export default class HmhController {
  @operation({
    summary: "Get Hmhs",
  })
  @get()
  static getHmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmh",
  })
  @post("{id}")
  static createHmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
