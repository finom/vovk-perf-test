import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dca")
export default class DcaController {
  @operation({
    summary: "Get Dca",
  })
  @get()
  static getDca = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dca",
  })
  @post("{id}")
  static createDca = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
