import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lke")
export default class LkeController {
  @operation({
    summary: "Get Lke",
  })
  @get()
  static getLke = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lke",
  })
  @post("{id}")
  static createLke = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
