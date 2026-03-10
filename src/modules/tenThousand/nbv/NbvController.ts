import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbv")
export default class NbvController {
  @operation({
    summary: "Get Nbv",
  })
  @get()
  static getNbv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbv",
  })
  @post("{id}")
  static createNbv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
