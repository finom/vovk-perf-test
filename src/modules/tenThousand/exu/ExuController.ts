import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exus")
export default class ExuController {
  @operation({
    summary: "Get Exus",
  })
  @get()
  static getExus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Exu",
  })
  @post("{id}")
  static createExu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
