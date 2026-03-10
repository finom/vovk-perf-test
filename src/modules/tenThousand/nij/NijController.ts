import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nij")
export default class NijController {
  @operation({
    summary: "Get Nij",
  })
  @get()
  static getNij = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nij",
  })
  @post("{id}")
  static createNij = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
