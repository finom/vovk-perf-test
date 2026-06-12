import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nmy")
export default class NmyController {
  @operation({
    summary: "Get Nmy",
  })
  @get()
  static getNmy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nmy",
  })
  @post("{id}")
  static createNmy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
