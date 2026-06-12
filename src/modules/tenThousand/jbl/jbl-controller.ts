import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jbl")
export default class JblController {
  @operation({
    summary: "Get Jbl",
  })
  @get()
  static getJbl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jbl",
  })
  @post("{id}")
  static createJbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
