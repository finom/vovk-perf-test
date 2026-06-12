import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jrn")
export default class JrnController {
  @operation({
    summary: "Get Jrn",
  })
  @get()
  static getJrn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jrn",
  })
  @post("{id}")
  static createJrn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
