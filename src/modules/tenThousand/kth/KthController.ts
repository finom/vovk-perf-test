import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kth")
export default class KthController {
  @operation({
    summary: "Get Kth",
  })
  @get()
  static getKth = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kth",
  })
  @post("{id}")
  static createKth = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
