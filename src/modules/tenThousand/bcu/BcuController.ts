import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bcu")
export default class BcuController {
  @operation({
    summary: "Get Bcu",
  })
  @get()
  static getBcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bcu",
  })
  @post("{id}")
  static createBcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
