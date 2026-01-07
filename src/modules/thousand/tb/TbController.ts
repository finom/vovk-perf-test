import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tb")
export default class TbController {
  @operation({
    summary: "Get Tb",
  })
  @get()
  static getTb = procedure({
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
