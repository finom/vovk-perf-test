import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nms")
export default class NmsController {
  @operation({
    summary: "Get Nms",
  })
  @get()
  static getNms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nms",
  })
  @post("{id}")
  static createNms = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
