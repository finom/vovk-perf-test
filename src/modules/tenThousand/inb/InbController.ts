import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inb")
export default class InbController {
  @operation({
    summary: "Get Inb",
  })
  @get()
  static getInb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inb",
  })
  @post("{id}")
  static createInb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
