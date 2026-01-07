import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ta")
export default class TaController {
  @operation({
    summary: "Get Ta",
  })
  @get()
  static getTa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ta",
  })
  @post("{id}")
  static createTa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
