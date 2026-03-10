import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("egl")
export default class EglController {
  @operation({
    summary: "Get Egl",
  })
  @get()
  static getEgl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Egl",
  })
  @post("{id}")
  static createEgl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
