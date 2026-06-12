import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrm")
export default class NrmController {
  @operation({
    summary: "Get Nrm",
  })
  @get()
  static getNrm = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrm",
  })
  @post("{id}")
  static createNrm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
