import { procedure, prefix, get, post, operation } from "vovk";

@prefix("deqs")
export default class DeqController {
  @operation({
    summary: "Get Deqs",
  })
  @get()
  static getDeqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Deq",
  })
  @post("{id}")
  static createDeq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
