import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrv")
export default class NrvController {
  @operation({
    summary: "Get Nrv",
  })
  @get()
  static getNrv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrv",
  })
  @post("{id}")
  static createNrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
