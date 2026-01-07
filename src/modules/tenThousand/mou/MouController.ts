import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mou")
export default class MouController {
  @operation({
    summary: "Get Mou",
  })
  @get()
  static getMou = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mou",
  })
  @post("{id}")
  static createMou = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
