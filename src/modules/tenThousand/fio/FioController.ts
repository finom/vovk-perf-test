import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fio")
export default class FioController {
  @operation({
    summary: "Get Fio",
  })
  @get()
  static getFio = procedure({
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
