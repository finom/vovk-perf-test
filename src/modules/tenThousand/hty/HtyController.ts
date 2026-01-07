import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hty")
export default class HtyController {
  @operation({
    summary: "Get Hty",
  })
  @get()
  static getHty = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hty",
  })
  @post("{id}")
  static createHty = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
