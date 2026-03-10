import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lja")
export default class LjaController {
  @operation({
    summary: "Get Lja",
  })
  @get()
  static getLja = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lja",
  })
  @post("{id}")
  static createLja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
