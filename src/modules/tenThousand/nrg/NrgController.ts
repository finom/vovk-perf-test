import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nrg")
export default class NrgController {
  @operation({
    summary: "Get Nrg",
  })
  @get()
  static getNrg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nrg",
  })
  @post("{id}")
  static createNrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
