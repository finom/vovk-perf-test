import { procedure, prefix, get, post, operation } from "vovk";

@prefix("pos")
export default class PoController {
  @operation({
    summary: "Get Pos",
  })
  @get()
  static getPos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Po",
  })
  @post("{id}")
  static createPo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
