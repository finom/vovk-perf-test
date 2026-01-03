import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmqs")
export default class BmqController {
  @operation({
    summary: "Get Bmqs",
  })
  @get()
  static getBmqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmq",
  })
  @post("{id}")
  static createBmq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
