import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lqcs")
export default class LqcController {
  @operation({
    summary: "Get Lqcs",
  })
  @get()
  static getLqcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lqc",
  })
  @post("{id}")
  static createLqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
