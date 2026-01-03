import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nahs")
export default class NahController {
  @operation({
    summary: "Get Nahs",
  })
  @get()
  static getNahs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nah",
  })
  @post("{id}")
  static createNah = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
