import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jqa")
export default class JqaController {
  @operation({
    summary: "Get Jqa",
  })
  @get()
  static getJqa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jqa",
  })
  @post("{id}")
  static createJqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
