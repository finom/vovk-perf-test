import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbd")
export default class NbdController {
  @operation({
    summary: "Get Nbd",
  })
  @get()
  static getNbd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbd",
  })
  @post("{id}")
  static createNbd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
