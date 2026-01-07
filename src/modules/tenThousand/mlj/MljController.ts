import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mlj")
export default class MljController {
  @operation({
    summary: "Get Mlj",
  })
  @get()
  static getMlj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mlj",
  })
  @post("{id}")
  static createMlj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
