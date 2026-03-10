import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmr")
export default class NmrController {
  @operation({
    summary: "Get Nmr",
  })
  @get()
  static getNmr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmr",
  })
  @post("{id}")
  static createNmr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
