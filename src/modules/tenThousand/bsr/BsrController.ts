import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsr")
export default class BsrController {
  @operation({
    summary: "Get Bsr",
  })
  @get()
  static getBsr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsr",
  })
  @post("{id}")
  static createBsr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
