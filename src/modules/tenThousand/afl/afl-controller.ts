import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afl")
export default class AflController {
  @operation({
    summary: "Get Afl",
  })
  @get()
  static getAfl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Afl",
  })
  @post("{id}")
  static createAfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
