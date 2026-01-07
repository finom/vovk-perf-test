import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hqa")
export default class HqaController {
  @operation({
    summary: "Get Hqa",
  })
  @get()
  static getHqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hqa",
  })
  @post("{id}")
  static createHqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
