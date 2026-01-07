import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fud")
export default class FudController {
  @operation({
    summary: "Get Fud",
  })
  @get()
  static getFud = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fud",
  })
  @post("{id}")
  static createFud = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
