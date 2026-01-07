import { procedure, prefix, get, post, operation } from "vovk";

@prefix("inp")
export default class InpController {
  @operation({
    summary: "Get Inp",
  })
  @get()
  static getInp = procedure({
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
