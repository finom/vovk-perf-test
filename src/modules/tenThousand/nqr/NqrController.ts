import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqr")
export default class NqrController {
  @operation({
    summary: "Get Nqr",
  })
  @get()
  static getNqr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqr",
  })
  @post("{id}")
  static createNqr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
