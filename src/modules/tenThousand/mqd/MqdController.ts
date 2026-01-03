import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqds")
export default class MqdController {
  @operation({
    summary: "Get Mqds",
  })
  @get()
  static getMqds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mqd",
  })
  @post("{id}")
  static createMqd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
