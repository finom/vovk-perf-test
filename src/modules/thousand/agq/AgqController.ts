import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agqs")
export default class AgqController {
  @operation({
    summary: "Get Agqs",
  })
  @get()
  static getAgqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Agq",
  })
  @post("{id}")
  static createAgq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
