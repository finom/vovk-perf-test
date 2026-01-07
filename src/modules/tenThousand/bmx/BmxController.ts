import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmx")
export default class BmxController {
  @operation({
    summary: "Get Bmx",
  })
  @get()
  static getBmx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmx",
  })
  @post("{id}")
  static createBmx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
