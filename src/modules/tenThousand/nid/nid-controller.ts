import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nid")
export default class NidController {
  @operation({
    summary: "Get Nid",
  })
  @get()
  static getNid = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nid",
  })
  @post("{id}")
  static createNid = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
