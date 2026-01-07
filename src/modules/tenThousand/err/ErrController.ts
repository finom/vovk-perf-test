import { procedure, prefix, get, post, operation } from "vovk";

@prefix("err")
export default class ErrController {
  @operation({
    summary: "Get Err",
  })
  @get()
  static getErr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Err",
  })
  @post("{id}")
  static createErr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
