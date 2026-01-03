import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhis")
export default class BhiController {
  @operation({
    summary: "Get Bhis",
  })
  @get()
  static getBhis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhi",
  })
  @post("{id}")
  static createBhi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
