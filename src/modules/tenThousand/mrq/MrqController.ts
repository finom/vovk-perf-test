import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrq")
export default class MrqController {
  @operation({
    summary: "Get Mrq",
  })
  @get()
  static getMrq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mrq",
  })
  @post("{id}")
  static createMrq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
