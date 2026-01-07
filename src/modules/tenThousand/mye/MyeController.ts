import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mye")
export default class MyeController {
  @operation({
    summary: "Get Mye",
  })
  @get()
  static getMye = procedure({
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
