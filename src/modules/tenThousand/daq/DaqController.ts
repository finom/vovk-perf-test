import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daqs")
export default class DaqController {
  @operation({
    summary: "Get Daqs",
  })
  @get()
  static getDaqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Daq",
  })
  @post("{id}")
  static createDaq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
