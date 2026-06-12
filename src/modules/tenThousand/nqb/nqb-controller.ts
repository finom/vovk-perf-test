import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqb")
export default class NqbController {
  @operation({
    summary: "Get Nqb",
  })
  @get()
  static getNqb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqb",
  })
  @post("{id}")
  static createNqb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
