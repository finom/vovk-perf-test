import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnqs")
export default class BnqController {
  @operation({
    summary: "Get Bnqs",
  })
  @get()
  static getBnqs = procedure({
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
