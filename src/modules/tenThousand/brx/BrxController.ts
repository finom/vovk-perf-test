import { procedure, prefix, get, post, operation } from "vovk";

@prefix("brx")
export default class BrxController {
  @operation({
    summary: "Get Brx",
  })
  @get()
  static getBrx = procedure({
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
