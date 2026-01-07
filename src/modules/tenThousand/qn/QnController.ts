import { procedure, prefix, get, post, operation } from "vovk";

@prefix("qn")
export default class QnController {
  @operation({
    summary: "Get Qn",
  })
  @get()
  static getQn = procedure({
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
