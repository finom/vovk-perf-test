import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jlj")
export default class JljController {
  @operation({
    summary: "Get Jlj",
  })
  @get()
  static getJlj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jlj",
  })
  @post("{id}")
  static createJlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
