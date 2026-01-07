import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhj")
export default class BhjController {
  @operation({
    summary: "Get Bhj",
  })
  @get()
  static getBhj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhj",
  })
  @post("{id}")
  static createBhj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
