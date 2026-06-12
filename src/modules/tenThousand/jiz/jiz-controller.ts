import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jiz")
export default class JizController {
  @operation({
    summary: "Get Jiz",
  })
  @get()
  static getJiz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jiz",
  })
  @post("{id}")
  static createJiz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
