import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpp")
export default class LppController {
  @operation({
    summary: "Get Lpp",
  })
  @get()
  static getLpp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpp",
  })
  @post("{id}")
  static createLpp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
