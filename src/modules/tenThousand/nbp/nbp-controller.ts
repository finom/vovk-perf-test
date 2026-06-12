import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbp")
export default class NbpController {
  @operation({
    summary: "Get Nbp",
  })
  @get()
  static getNbp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbp",
  })
  @post("{id}")
  static createNbp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
