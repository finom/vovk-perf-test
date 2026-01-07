import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcd")
export default class BcdController {
  @operation({
    summary: "Get Bcd",
  })
  @get()
  static getBcd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcd",
  })
  @post("{id}")
  static createBcd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
