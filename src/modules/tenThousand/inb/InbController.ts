import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inbs")
export default class InbController {
  @operation({
    summary: "Get Inbs",
  })
  @get()
  static getInbs = procedure({
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
