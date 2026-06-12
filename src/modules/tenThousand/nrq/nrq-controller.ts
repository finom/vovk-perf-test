import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrq")
export default class NrqController {
  @operation({
    summary: "Get Nrq",
  })
  @get()
  static getNrq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrq",
  })
  @post("{id}")
  static createNrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
