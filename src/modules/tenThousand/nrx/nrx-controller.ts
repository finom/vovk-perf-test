import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrx")
export default class NrxController {
  @operation({
    summary: "Get Nrx",
  })
  @get()
  static getNrx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrx",
  })
  @post("{id}")
  static createNrx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
