import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bck")
export default class BckController {
  @operation({
    summary: "Get Bck",
  })
  @get()
  static getBck = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bck",
  })
  @post("{id}")
  static createBck = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
