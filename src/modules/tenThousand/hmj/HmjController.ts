import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hmj")
export default class HmjController {
  @operation({
    summary: "Get Hmj",
  })
  @get()
  static getHmj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hmj",
  })
  @post("{id}")
  static createHmj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
