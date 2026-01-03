import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hkas")
export default class HkaController {
  @operation({
    summary: "Get Hkas",
  })
  @get()
  static getHkas = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hka",
  })
  @post("{id}")
  static createHka = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
