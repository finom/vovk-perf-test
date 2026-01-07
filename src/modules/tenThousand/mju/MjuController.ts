import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mju")
export default class MjuController {
  @operation({
    summary: "Get Mju",
  })
  @get()
  static getMju = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mju",
  })
  @post("{id}")
  static createMju = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
