import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgcs")
export default class BgcController {
  @operation({
    summary: "Get Bgcs",
  })
  @get()
  static getBgcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgc",
  })
  @post("{id}")
  static createBgc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
