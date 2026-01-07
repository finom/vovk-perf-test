import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eke")
export default class EkeController {
  @operation({
    summary: "Get Eke",
  })
  @get()
  static getEke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eke",
  })
  @post("{id}")
  static createEke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
