import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbj")
export default class NbjController {
  @operation({
    summary: "Get Nbj",
  })
  @get()
  static getNbj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbj",
  })
  @post("{id}")
  static createNbj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
