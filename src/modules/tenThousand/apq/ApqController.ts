import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apqs")
export default class ApqController {
  @operation({
    summary: "Get Apqs",
  })
  @get()
  static getApqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Apq",
  })
  @post("{id}")
  static createApq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
