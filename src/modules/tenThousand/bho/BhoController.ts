import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bho")
export default class BhoController {
  @operation({
    summary: "Get Bho",
  })
  @get()
  static getBho = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bho",
  })
  @post("{id}")
  static createBho = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
