import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bjcs")
export default class BjcController {
  @operation({
    summary: "Get Bjcs",
  })
  @get()
  static getBjcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bjc",
  })
  @post("{id}")
  static createBjc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
