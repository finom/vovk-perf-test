import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsk")
export default class NskController {
  @operation({
    summary: "Get Nsk",
  })
  @get()
  static getNsk = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsk",
  })
  @post("{id}")
  static createNsk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
