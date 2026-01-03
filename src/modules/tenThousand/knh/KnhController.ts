import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knhs")
export default class KnhController {
  @operation({
    summary: "Get Knhs",
  })
  @get()
  static getKnhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Knh",
  })
  @post("{id}")
  static createKnh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
