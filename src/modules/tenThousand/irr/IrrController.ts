import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irrs")
export default class IrrController {
  @operation({
    summary: "Get Irrs",
  })
  @get()
  static getIrrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Irr",
  })
  @post("{id}")
  static createIrr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
