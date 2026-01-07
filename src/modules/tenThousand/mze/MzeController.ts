import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mze")
export default class MzeController {
  @operation({
    summary: "Get Mze",
  })
  @get()
  static getMze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mze",
  })
  @post("{id}")
  static createMze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
