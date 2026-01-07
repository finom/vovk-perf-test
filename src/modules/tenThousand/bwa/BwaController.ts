import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwa")
export default class BwaController {
  @operation({
    summary: "Get Bwa",
  })
  @get()
  static getBwa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwa",
  })
  @post("{id}")
  static createBwa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
