import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cczs")
export default class CczController {
  @operation({
    summary: "Get Cczs",
  })
  @get()
  static getCczs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ccz",
  })
  @post("{id}")
  static createCcz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
