import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msx")
export default class MsxController {
  @operation({
    summary: "Get Msx",
  })
  @get()
  static getMsx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msx",
  })
  @post("{id}")
  static createMsx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
