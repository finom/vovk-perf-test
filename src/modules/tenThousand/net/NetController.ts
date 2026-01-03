import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nets")
export default class NetController {
  @operation({
    summary: "Get Nets",
  })
  @get()
  static getNets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Net",
  })
  @post("{id}")
  static createNet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
