import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bghs")
export default class BghController {
  @operation({
    summary: "Get Bghs",
  })
  @get()
  static getBghs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgh",
  })
  @post("{id}")
  static createBgh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
