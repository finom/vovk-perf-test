import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cuses")
export default class CusController {
  @operation({
    summary: "Get Cuses",
  })
  @get()
  static getCuses = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cus",
  })
  @post("{id}")
  static createCus = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
