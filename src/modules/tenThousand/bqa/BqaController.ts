import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bqa")
export default class BqaController {
  @operation({
    summary: "Get Bqa",
  })
  @get()
  static getBqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bqa",
  })
  @post("{id}")
  static createBqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
