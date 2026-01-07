import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdx")
export default class FdxController {
  @operation({
    summary: "Get Fdx",
  })
  @get()
  static getFdx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdx",
  })
  @post("{id}")
  static createFdx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
