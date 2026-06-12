import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqn")
export default class NqnController {
  @operation({
    summary: "Get Nqn",
  })
  @get()
  static getNqn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqn",
  })
  @post("{id}")
  static createNqn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
