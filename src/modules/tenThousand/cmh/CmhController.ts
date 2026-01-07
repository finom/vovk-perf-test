import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmh")
export default class CmhController {
  @operation({
    summary: "Get Cmh",
  })
  @get()
  static getCmh = procedure({
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
