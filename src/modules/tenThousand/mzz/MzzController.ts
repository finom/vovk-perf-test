import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mzzes")
export default class MzzController {
  @operation({
    summary: "Get Mzzes",
  })
  @get()
  static getMzzes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mzz",
  })
  @post("{id}")
  static createMzz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
