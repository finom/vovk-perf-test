import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nb")
export default class NbController {
  @operation({
    summary: "Get Nb",
  })
  @get()
  static getNb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nb",
  })
  @post("{id}")
  static createNb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
