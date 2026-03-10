import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("buz")
export default class BuzController {
  @operation({
    summary: "Get Buz",
  })
  @get()
  static getBuz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Buz",
  })
  @post("{id}")
  static createBuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
