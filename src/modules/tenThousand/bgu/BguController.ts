import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bgus")
export default class BguController {
  @operation({
    summary: "Get Bgus",
  })
  @get()
  static getBgus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bgu",
  })
  @post("{id}")
  static createBgu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
