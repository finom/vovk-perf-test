import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcu")
export default class HcuController {
  @operation({
    summary: "Get Hcu",
  })
  @get()
  static getHcu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hcu",
  })
  @post("{id}")
  static createHcu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
