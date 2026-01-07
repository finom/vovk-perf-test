import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctc")
export default class CtcController {
  @operation({
    summary: "Get Ctc",
  })
  @get()
  static getCtc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ctc",
  })
  @post("{id}")
  static createCtc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
