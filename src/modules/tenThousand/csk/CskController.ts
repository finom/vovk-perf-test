import { procedure, prefix, get, post, operation } from "vovk";

@prefix("csk")
export default class CskController {
  @operation({
    summary: "Get Csk",
  })
  @get()
  static getCsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Csk",
  })
  @post("{id}")
  static createCsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
