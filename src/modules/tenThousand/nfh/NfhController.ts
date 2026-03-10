import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nfh")
export default class NfhController {
  @operation({
    summary: "Get Nfh",
  })
  @get()
  static getNfh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nfh",
  })
  @post("{id}")
  static createNfh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
