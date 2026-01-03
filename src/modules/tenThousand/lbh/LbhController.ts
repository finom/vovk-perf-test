import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lbhs")
export default class LbhController {
  @operation({
    summary: "Get Lbhs",
  })
  @get()
  static getLbhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lbh",
  })
  @post("{id}")
  static createLbh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
