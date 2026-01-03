import { procedure, prefix, get, post, operation } from "vovk";

@prefix("errs")
export default class ErrController {
  @operation({
    summary: "Get Errs",
  })
  @get()
  static getErrs = procedure({
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
