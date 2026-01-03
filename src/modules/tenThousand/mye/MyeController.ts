import { procedure, prefix, get, post, operation } from "vovk";

@prefix("myes")
export default class MyeController {
  @operation({
    summary: "Get Myes",
  })
  @get()
  static getMyes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mye",
  })
  @post("{id}")
  static createMye = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
