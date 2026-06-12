import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncj")
export default class NcjController {
  @operation({
    summary: "Get Ncj",
  })
  @get()
  static getNcj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncj",
  })
  @post("{id}")
  static createNcj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
