import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzcs")
export default class FzcController {
  @operation({
    summary: "Get Fzcs",
  })
  @get()
  static getFzcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzc",
  })
  @post("{id}")
  static createFzc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
