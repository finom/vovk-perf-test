import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brs")
export default class BrsController {
  @operation({
    summary: "Get Brs",
  })
  @get()
  static getBrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brs",
  })
  @post("{id}")
  static createBrs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
