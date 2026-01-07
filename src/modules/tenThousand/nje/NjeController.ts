import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nje")
export default class NjeController {
  @operation({
    summary: "Get Nje",
  })
  @get()
  static getNje = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nje",
  })
  @post("{id}")
  static createNje = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
