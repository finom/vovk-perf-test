import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mycs")
export default class MycController {
  @operation({
    summary: "Get Mycs",
  })
  @get()
  static getMycs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Myc",
  })
  @post("{id}")
  static createMyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
