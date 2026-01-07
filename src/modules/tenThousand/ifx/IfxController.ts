import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifx")
export default class IfxController {
  @operation({
    summary: "Get Ifx",
  })
  @get()
  static getIfx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifx",
  })
  @post("{id}")
  static createIfx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
