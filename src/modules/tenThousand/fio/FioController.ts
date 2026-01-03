import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fios")
export default class FioController {
  @operation({
    summary: "Get Fios",
  })
  @get()
  static getFios = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fio",
  })
  @post("{id}")
  static createFio = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
