import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("rn")
export default class RnController {
  @operation({
    summary: "Get Rn",
  })
  @get()
  static getRn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Rn",
  })
  @post("{id}")
  static createRn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
