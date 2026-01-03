import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elcs")
export default class ElcController {
  @operation({
    summary: "Get Elcs",
  })
  @get()
  static getElcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Elc",
  })
  @post("{id}")
  static createElc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
