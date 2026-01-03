import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mals")
export default class MalController {
  @operation({
    summary: "Get Mals",
  })
  @get()
  static getMals = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mal",
  })
  @post("{id}")
  static createMal = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
