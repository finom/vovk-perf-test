import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qns")
export default class QnController {
  @operation({
    summary: "Get Qns",
  })
  @get()
  static getQns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Qn",
  })
  @post("{id}")
  static createQn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
