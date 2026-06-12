import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrj")
export default class NrjController {
  @operation({
    summary: "Get Nrj",
  })
  @get()
  static getNrj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrj",
  })
  @post("{id}")
  static createNrj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
