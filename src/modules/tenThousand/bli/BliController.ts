import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bli")
export default class BliController {
  @operation({
    summary: "Get Bli",
  })
  @get()
  static getBli = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bli",
  })
  @post("{id}")
  static createBli = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
