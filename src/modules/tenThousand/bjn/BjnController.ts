import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjns")
export default class BjnController {
  @operation({
    summary: "Get Bjns",
  })
  @get()
  static getBjns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjn",
  })
  @post("{id}")
  static createBjn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
