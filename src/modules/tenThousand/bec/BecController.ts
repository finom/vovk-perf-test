import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bec")
export default class BecController {
  @operation({
    summary: "Get Bec",
  })
  @get()
  static getBec = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bec",
  })
  @post("{id}")
  static createBec = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
