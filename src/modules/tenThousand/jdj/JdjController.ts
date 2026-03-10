import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jdj")
export default class JdjController {
  @operation({
    summary: "Get Jdj",
  })
  @get()
  static getJdj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jdj",
  })
  @post("{id}")
  static createJdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
