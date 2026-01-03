import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mous")
export default class MouController {
  @operation({
    summary: "Get Mous",
  })
  @get()
  static getMous = procedure({
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
