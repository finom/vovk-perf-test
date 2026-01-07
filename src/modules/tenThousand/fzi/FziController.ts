import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fzi")
export default class FziController {
  @operation({
    summary: "Get Fzi",
  })
  @get()
  static getFzi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fzi",
  })
  @post("{id}")
  static createFzi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
