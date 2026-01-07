import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifg")
export default class IfgController {
  @operation({
    summary: "Get Ifg",
  })
  @get()
  static getIfg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifg",
  })
  @post("{id}")
  static createIfg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
