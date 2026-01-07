import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilg")
export default class IlgController {
  @operation({
    summary: "Get Ilg",
  })
  @get()
  static getIlg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ilg",
  })
  @post("{id}")
  static createIlg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
