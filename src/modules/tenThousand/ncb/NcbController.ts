import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ncb")
export default class NcbController {
  @operation({
    summary: "Get Ncb",
  })
  @get()
  static getNcb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ncb",
  })
  @post("{id}")
  static createNcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
