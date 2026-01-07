import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftv")
export default class FtvController {
  @operation({
    summary: "Get Ftv",
  })
  @get()
  static getFtv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ftv",
  })
  @post("{id}")
  static createFtv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
