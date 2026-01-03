import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tbs")
export default class TbController {
  @operation({
    summary: "Get Tbs",
  })
  @get()
  static getTbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tb",
  })
  @post("{id}")
  static createTb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
