import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jil")
export default class JilController {
  @operation({
    summary: "Get Jil",
  })
  @get()
  static getJil = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jil",
  })
  @post("{id}")
  static createJil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
