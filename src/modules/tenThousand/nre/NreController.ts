import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nre")
export default class NreController {
  @operation({
    summary: "Get Nre",
  })
  @get()
  static getNre = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nre",
  })
  @post("{id}")
  static createNre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
