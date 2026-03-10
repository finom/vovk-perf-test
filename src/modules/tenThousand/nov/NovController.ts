import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nov")
export default class NovController {
  @operation({
    summary: "Get Nov",
  })
  @get()
  static getNov = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nov",
  })
  @post("{id}")
  static createNov = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
