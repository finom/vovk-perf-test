import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npw")
export default class NpwController {
  @operation({
    summary: "Get Npw",
  })
  @get()
  static getNpw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npw",
  })
  @post("{id}")
  static createNpw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
