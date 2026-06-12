import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("joi")
export default class JoiController {
  @operation({
    summary: "Get Joi",
  })
  @get()
  static getJoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Joi",
  })
  @post("{id}")
  static createJoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
