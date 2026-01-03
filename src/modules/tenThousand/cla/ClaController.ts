import { procedure, prefix, get, post, operation } from "vovk";

@prefix("clas")
export default class ClaController {
  @operation({
    summary: "Get Clas",
  })
  @get()
  static getClas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cla",
  })
  @post("{id}")
  static createCla = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
