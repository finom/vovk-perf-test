import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhw")
export default class BhwController {
  @operation({
    summary: "Get Bhw",
  })
  @get()
  static getBhw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhw",
  })
  @post("{id}")
  static createBhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
