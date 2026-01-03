import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdis")
export default class FdiController {
  @operation({
    summary: "Get Fdis",
  })
  @get()
  static getFdis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fdi",
  })
  @post("{id}")
  static createFdi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
