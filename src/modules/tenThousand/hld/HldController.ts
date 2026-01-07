import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hld")
export default class HldController {
  @operation({
    summary: "Get Hld",
  })
  @get()
  static getHld = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hld",
  })
  @post("{id}")
  static createHld = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
