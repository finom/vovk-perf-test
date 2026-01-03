import { procedure, prefix, get, post, operation } from "vovk";

@prefix("njqs")
export default class NjqController {
  @operation({
    summary: "Get Njqs",
  })
  @get()
  static getNjqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Njq",
  })
  @post("{id}")
  static createNjq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
