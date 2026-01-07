import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bal")
export default class BalController {
  @operation({
    summary: "Get Bal",
  })
  @get()
  static getBal = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bal",
  })
  @post("{id}")
  static createBal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
