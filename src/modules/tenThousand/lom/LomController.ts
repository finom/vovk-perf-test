import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lom")
export default class LomController {
  @operation({
    summary: "Get Lom",
  })
  @get()
  static getLom = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lom",
  })
  @post("{id}")
  static createLom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
