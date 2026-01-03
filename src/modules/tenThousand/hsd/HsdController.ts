import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsds")
export default class HsdController {
  @operation({
    summary: "Get Hsds",
  })
  @get()
  static getHsds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hsd",
  })
  @post("{id}")
  static createHsd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
