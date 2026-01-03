import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhxes")
export default class BhxController {
  @operation({
    summary: "Get Bhxes",
  })
  @get()
  static getBhxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhx",
  })
  @post("{id}")
  static createBhx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
