import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bhn")
export default class BhnController {
  @operation({
    summary: "Get Bhn",
  })
  @get()
  static getBhn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bhn",
  })
  @post("{id}")
  static createBhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
