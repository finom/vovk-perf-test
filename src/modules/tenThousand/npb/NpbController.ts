import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npb")
export default class NpbController {
  @operation({
    summary: "Get Npb",
  })
  @get()
  static getNpb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npb",
  })
  @post("{id}")
  static createNpb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
