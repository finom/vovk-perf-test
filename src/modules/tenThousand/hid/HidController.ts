import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hid")
export default class HidController {
  @operation({
    summary: "Get Hid",
  })
  @get()
  static getHid = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hid",
  })
  @post("{id}")
  static createHid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
