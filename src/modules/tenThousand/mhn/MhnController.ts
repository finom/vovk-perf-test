import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mhn")
export default class MhnController {
  @operation({
    summary: "Get Mhn",
  })
  @get()
  static getMhn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mhn",
  })
  @post("{id}")
  static createMhn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
