import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdf")
export default class BdfController {
  @operation({
    summary: "Get Bdf",
  })
  @get()
  static getBdf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bdf",
  })
  @post("{id}")
  static createBdf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
