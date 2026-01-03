import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hdas")
export default class HdaController {
  @operation({
    summary: "Get Hdas",
  })
  @get()
  static getHdas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hda",
  })
  @post("{id}")
  static createHda = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
