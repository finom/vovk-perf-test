import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndt")
export default class NdtController {
  @operation({
    summary: "Get Ndt",
  })
  @get()
  static getNdt = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndt",
  })
  @post("{id}")
  static createNdt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
