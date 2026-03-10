import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrt")
export default class JrtController {
  @operation({
    summary: "Get Jrt",
  })
  @get()
  static getJrt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrt",
  })
  @post("{id}")
  static createJrt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
