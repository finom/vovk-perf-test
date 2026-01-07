import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lhu")
export default class LhuController {
  @operation({
    summary: "Get Lhu",
  })
  @get()
  static getLhu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lhu",
  })
  @post("{id}")
  static createLhu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
