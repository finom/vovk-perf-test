import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nda")
export default class NdaController {
  @operation({
    summary: "Get Nda",
  })
  @get()
  static getNda = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nda",
  })
  @post("{id}")
  static createNda = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
