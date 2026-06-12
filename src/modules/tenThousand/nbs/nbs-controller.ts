import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nbs")
export default class NbsController {
  @operation({
    summary: "Get Nbs",
  })
  @get()
  static getNbs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nbs",
  })
  @post("{id}")
  static createNbs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
