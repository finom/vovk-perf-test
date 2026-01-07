import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mui")
export default class MuiController {
  @operation({
    summary: "Get Mui",
  })
  @get()
  static getMui = procedure({
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
