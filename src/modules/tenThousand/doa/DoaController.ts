import { procedure, prefix, get, post, operation } from "vovk";

@prefix("doa")
export default class DoaController {
  @operation({
    summary: "Get Doa",
  })
  @get()
  static getDoa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Doa",
  })
  @post("{id}")
  static createDoa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
