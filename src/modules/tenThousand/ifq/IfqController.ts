import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifqs")
export default class IfqController {
  @operation({
    summary: "Get Ifqs",
  })
  @get()
  static getIfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifq",
  })
  @post("{id}")
  static createIfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
