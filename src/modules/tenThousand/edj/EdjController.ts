import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edj")
export default class EdjController {
  @operation({
    summary: "Get Edj",
  })
  @get()
  static getEdj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Edj",
  })
  @post("{id}")
  static createEdj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
