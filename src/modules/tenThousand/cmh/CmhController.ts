import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmhs")
export default class CmhController {
  @operation({
    summary: "Get Cmhs",
  })
  @get()
  static getCmhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmh",
  })
  @post("{id}")
  static createCmh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
