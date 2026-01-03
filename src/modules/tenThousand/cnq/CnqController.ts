import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnqs")
export default class CnqController {
  @operation({
    summary: "Get Cnqs",
  })
  @get()
  static getCnqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cnq",
  })
  @post("{id}")
  static createCnq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
