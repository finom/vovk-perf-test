import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhzs")
export default class BhzController {
  @operation({
    summary: "Get Bhzs",
  })
  @get()
  static getBhzs = procedure({
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
