import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ngh")
export default class NghController {
  @operation({
    summary: "Get Ngh",
  })
  @get()
  static getNgh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ngh",
  })
  @post("{id}")
  static createNgh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
