import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fxt")
export default class FxtController {
  @operation({
    summary: "Get Fxt",
  })
  @get()
  static getFxt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fxt",
  })
  @post("{id}")
  static createFxt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
