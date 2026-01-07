import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beh")
export default class BehController {
  @operation({
    summary: "Get Beh",
  })
  @get()
  static getBeh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Beh",
  })
  @post("{id}")
  static createBeh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
