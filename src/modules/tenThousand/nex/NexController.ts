import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nex")
export default class NexController {
  @operation({
    summary: "Get Nex",
  })
  @get()
  static getNex = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nex",
  })
  @post("{id}")
  static createNex = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
