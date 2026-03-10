import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nie")
export default class NieController {
  @operation({
    summary: "Get Nie",
  })
  @get()
  static getNie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nie",
  })
  @post("{id}")
  static createNie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
