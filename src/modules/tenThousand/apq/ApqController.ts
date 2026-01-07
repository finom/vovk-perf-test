import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apq")
export default class ApqController {
  @operation({
    summary: "Get Apq",
  })
  @get()
  static getApq = procedure({
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
