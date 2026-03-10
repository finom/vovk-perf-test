import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nlg")
export default class NlgController {
  @operation({
    summary: "Get Nlg",
  })
  @get()
  static getNlg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nlg",
  })
  @post("{id}")
  static createNlg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
