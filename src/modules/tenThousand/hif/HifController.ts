import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hifs")
export default class HifController {
  @operation({
    summary: "Get Hifs",
  })
  @get()
  static getHifs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hif",
  })
  @post("{id}")
  static createHif = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
