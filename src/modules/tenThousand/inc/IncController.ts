import { procedure, prefix, get, post, operation } from "vovk";

@prefix("incs")
export default class IncController {
  @operation({
    summary: "Get Incs",
  })
  @get()
  static getIncs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inc",
  })
  @post("{id}")
  static createInc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
