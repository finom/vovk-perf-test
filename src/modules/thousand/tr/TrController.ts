import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tr")
export default class TrController {
  @operation({
    summary: "Get Tr",
  })
  @get()
  static getTr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tr",
  })
  @post("{id}")
  static createTr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
