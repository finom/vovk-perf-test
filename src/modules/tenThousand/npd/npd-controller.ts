import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npd")
export default class NpdController {
  @operation({
    summary: "Get Npd",
  })
  @get()
  static getNpd = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npd",
  })
  @post("{id}")
  static createNpd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
