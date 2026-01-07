import { procedure, prefix, get, post, operation } from "vovk";

@prefix("byl")
export default class BylController {
  @operation({
    summary: "Get Byl",
  })
  @get()
  static getByl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Byl",
  })
  @post("{id}")
  static createByl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
