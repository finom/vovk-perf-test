import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ifhs")
export default class IfhController {
  @operation({
    summary: "Get Ifhs",
  })
  @get()
  static getIfhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ifh",
  })
  @post("{id}")
  static createIfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
