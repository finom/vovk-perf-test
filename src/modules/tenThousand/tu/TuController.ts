import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tu")
export default class TuController {
  @operation({
    summary: "Get Tu",
  })
  @get()
  static getTu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tu",
  })
  @post("{id}")
  static createTu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
