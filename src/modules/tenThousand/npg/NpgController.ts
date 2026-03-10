import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npg")
export default class NpgController {
  @operation({
    summary: "Get Npg",
  })
  @get()
  static getNpg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npg",
  })
  @post("{id}")
  static createNpg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
