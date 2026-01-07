import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dro")
export default class DroController {
  @operation({
    summary: "Get Dro",
  })
  @get()
  static getDro = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dro",
  })
  @post("{id}")
  static createDro = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
