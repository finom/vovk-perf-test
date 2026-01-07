import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msj")
export default class MsjController {
  @operation({
    summary: "Get Msj",
  })
  @get()
  static getMsj = procedure({
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
