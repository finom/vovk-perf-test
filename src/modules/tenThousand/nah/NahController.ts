import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nah")
export default class NahController {
  @operation({
    summary: "Get Nah",
  })
  @get()
  static getNah = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nah",
  })
  @post("{id}")
  static createNah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
