import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndn")
export default class NdnController {
  @operation({
    summary: "Get Ndn",
  })
  @get()
  static getNdn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndn",
  })
  @post("{id}")
  static createNdn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
