import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjus")
export default class BjuController {
  @operation({
    summary: "Get Bjus",
  })
  @get()
  static getBjus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bju",
  })
  @post("{id}")
  static createBju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
