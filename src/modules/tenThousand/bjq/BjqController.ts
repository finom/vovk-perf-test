import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjq")
export default class BjqController {
  @operation({
    summary: "Get Bjq",
  })
  @get()
  static getBjq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjq",
  })
  @post("{id}")
  static createBjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
