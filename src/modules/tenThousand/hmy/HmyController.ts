import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmies")
export default class HmyController {
  @operation({
    summary: "Get Hmies",
  })
  @get()
  static getHmies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmy",
  })
  @post("{id}")
  static createHmy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
