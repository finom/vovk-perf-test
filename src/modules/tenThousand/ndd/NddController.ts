import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ndd")
export default class NddController {
  @operation({
    summary: "Get Ndd",
  })
  @get()
  static getNdd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ndd",
  })
  @post("{id}")
  static createNdd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
