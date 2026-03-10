import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("npk")
export default class NpkController {
  @operation({
    summary: "Get Npk",
  })
  @get()
  static getNpk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Npk",
  })
  @post("{id}")
  static createNpk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
