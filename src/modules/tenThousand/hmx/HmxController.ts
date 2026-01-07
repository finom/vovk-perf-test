import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmx")
export default class HmxController {
  @operation({
    summary: "Get Hmx",
  })
  @get()
  static getHmx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmx",
  })
  @post("{id}")
  static createHmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
