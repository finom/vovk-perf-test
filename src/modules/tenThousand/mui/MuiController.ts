import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muis")
export default class MuiController {
  @operation({
    summary: "Get Muis",
  })
  @get()
  static getMuis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mui",
  })
  @post("{id}")
  static createMui = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
