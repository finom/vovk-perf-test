import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hlds")
export default class HldController {
  @operation({
    summary: "Get Hlds",
  })
  @get()
  static getHlds = procedure({
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
