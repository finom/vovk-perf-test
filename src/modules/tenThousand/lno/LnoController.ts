import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lno")
export default class LnoController {
  @operation({
    summary: "Get Lno",
  })
  @get()
  static getLno = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lno",
  })
  @post("{id}")
  static createLno = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
