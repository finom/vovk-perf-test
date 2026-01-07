import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bsh")
export default class BshController {
  @operation({
    summary: "Get Bsh",
  })
  @get()
  static getBsh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bsh",
  })
  @post("{id}")
  static createBsh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
