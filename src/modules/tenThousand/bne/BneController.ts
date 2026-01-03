import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bnes")
export default class BneController {
  @operation({
    summary: "Get Bnes",
  })
  @get()
  static getBnes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bne",
  })
  @post("{id}")
  static createBne = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
