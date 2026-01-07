import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcy")
export default class BcyController {
  @operation({
    summary: "Get Bcy",
  })
  @get()
  static getBcy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcy",
  })
  @post("{id}")
  static createBcy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
