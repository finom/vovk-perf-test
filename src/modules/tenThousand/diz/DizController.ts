import { procedure, prefix, get, post, operation } from "vovk";

@prefix("diz")
export default class DizController {
  @operation({
    summary: "Get Diz",
  })
  @get()
  static getDiz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Diz",
  })
  @post("{id}")
  static createDiz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
