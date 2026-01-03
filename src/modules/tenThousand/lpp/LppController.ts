import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpps")
export default class LppController {
  @operation({
    summary: "Get Lpps",
  })
  @get()
  static getLpps = procedure({
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
