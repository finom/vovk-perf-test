import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmz")
export default class HmzController {
  @operation({
    summary: "Get Hmz",
  })
  @get()
  static getHmz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmz",
  })
  @post("{id}")
  static createHmz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
