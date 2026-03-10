import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqv")
export default class NqvController {
  @operation({
    summary: "Get Nqv",
  })
  @get()
  static getNqv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqv",
  })
  @post("{id}")
  static createNqv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
