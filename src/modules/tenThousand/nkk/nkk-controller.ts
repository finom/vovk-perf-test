import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nkk")
export default class NkkController {
  @operation({
    summary: "Get Nkk",
  })
  @get()
  static getNkk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nkk",
  })
  @post("{id}")
  static createNkk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
