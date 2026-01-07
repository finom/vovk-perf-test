import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joi")
export default class JoiController {
  @operation({
    summary: "Get Joi",
  })
  @get()
  static getJoi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joi",
  })
  @post("{id}")
  static createJoi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
