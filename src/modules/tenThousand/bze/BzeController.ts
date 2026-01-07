import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bze")
export default class BzeController {
  @operation({
    summary: "Get Bze",
  })
  @get()
  static getBze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bze",
  })
  @post("{id}")
  static createBze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
