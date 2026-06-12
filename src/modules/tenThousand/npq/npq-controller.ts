import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npq")
export default class NpqController {
  @operation({
    summary: "Get Npq",
  })
  @get()
  static getNpq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npq",
  })
  @post("{id}")
  static createNpq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
