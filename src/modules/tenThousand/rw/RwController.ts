import { procedure, prefix, get, post, operation } from "vovk";

@prefix("rws")
export default class RwController {
  @operation({
    summary: "Get Rws",
  })
  @get()
  static getRws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Rw",
  })
  @post("{id}")
  static createRw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
