import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ra")
export default class RaController {
  @operation({
    summary: "Get Ra",
  })
  @get()
  static getRa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ra",
  })
  @post("{id}")
  static createRa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
