import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msjs")
export default class MsjController {
  @operation({
    summary: "Get Msjs",
  })
  @get()
  static getMsjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Msj",
  })
  @post("{id}")
  static createMsj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
