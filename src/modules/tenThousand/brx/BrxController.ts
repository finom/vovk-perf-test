import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brxes")
export default class BrxController {
  @operation({
    summary: "Get Brxes",
  })
  @get()
  static getBrxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Brx",
  })
  @post("{id}")
  static createBrx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
