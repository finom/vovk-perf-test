import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tds")
export default class TdController {
  @operation({
    summary: "Get Tds",
  })
  @get()
  static getTds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Td",
  })
  @post("{id}")
  static createTd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
