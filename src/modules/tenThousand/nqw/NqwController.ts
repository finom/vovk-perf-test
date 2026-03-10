import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqw")
export default class NqwController {
  @operation({
    summary: "Get Nqw",
  })
  @get()
  static getNqw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqw",
  })
  @post("{id}")
  static createNqw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
