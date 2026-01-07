import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhz")
export default class BhzController {
  @operation({
    summary: "Get Bhz",
  })
  @get()
  static getBhz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhz",
  })
  @post("{id}")
  static createBhz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
