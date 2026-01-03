import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsbs")
export default class BsbController {
  @operation({
    summary: "Get Bsbs",
  })
  @get()
  static getBsbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsb",
  })
  @post("{id}")
  static createBsb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
