import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmw")
export default class HmwController {
  @operation({
    summary: "Get Hmw",
  })
  @get()
  static getHmw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmw",
  })
  @post("{id}")
  static createHmw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
