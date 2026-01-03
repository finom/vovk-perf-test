import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inps")
export default class InpController {
  @operation({
    summary: "Get Inps",
  })
  @get()
  static getInps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Inp",
  })
  @post("{id}")
  static createInp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
