import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exu")
export default class ExuController {
  @operation({
    summary: "Get Exu",
  })
  @get()
  static getExu = procedure({
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
