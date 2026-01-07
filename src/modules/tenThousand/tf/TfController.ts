import { procedure, prefix, get, post, operation } from "vovk";

@prefix("tf")
export default class TfController {
  @operation({
    summary: "Get Tf",
  })
  @get()
  static getTf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Tf",
  })
  @post("{id}")
  static createTf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
