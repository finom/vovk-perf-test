import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbg")
export default class NbgController {
  @operation({
    summary: "Get Nbg",
  })
  @get()
  static getNbg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbg",
  })
  @post("{id}")
  static createNbg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
