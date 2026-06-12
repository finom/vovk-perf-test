import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tm")
export default class TmController {
  @operation({
    summary: "Get Tm",
  })
  @get()
  static getTm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Tm",
  })
  @post("{id}")
  static createTm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
