import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncq")
export default class NcqController {
  @operation({
    summary: "Get Ncq",
  })
  @get()
  static getNcq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncq",
  })
  @post("{id}")
  static createNcq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
