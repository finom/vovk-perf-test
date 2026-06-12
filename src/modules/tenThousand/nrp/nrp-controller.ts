import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrp")
export default class NrpController {
  @operation({
    summary: "Get Nrp",
  })
  @get()
  static getNrp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrp",
  })
  @post("{id}")
  static createNrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
