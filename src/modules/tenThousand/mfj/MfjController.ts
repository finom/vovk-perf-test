import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfj")
export default class MfjController {
  @operation({
    summary: "Get Mfj",
  })
  @get()
  static getMfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfj",
  })
  @post("{id}")
  static createMfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
