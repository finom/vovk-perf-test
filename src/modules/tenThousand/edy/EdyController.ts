import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edy")
export default class EdyController {
  @operation({
    summary: "Get Edy",
  })
  @get()
  static getEdy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edy",
  })
  @post("{id}")
  static createEdy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
