import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqc")
export default class NqcController {
  @operation({
    summary: "Get Nqc",
  })
  @get()
  static getNqc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqc",
  })
  @post("{id}")
  static createNqc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
