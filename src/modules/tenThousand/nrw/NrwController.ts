import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrw")
export default class NrwController {
  @operation({
    summary: "Get Nrw",
  })
  @get()
  static getNrw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrw",
  })
  @post("{id}")
  static createNrw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
