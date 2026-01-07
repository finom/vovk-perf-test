import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnq")
export default class BnqController {
  @operation({
    summary: "Get Bnq",
  })
  @get()
  static getBnq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bnq",
  })
  @post("{id}")
  static createBnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
