import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joi")
export default class JoiController {
  @operation({
    summary: "Get Joi",
  })
  @get()
  static getJoi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Joi",
  })
  @post("{id}")
  static createJoi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
