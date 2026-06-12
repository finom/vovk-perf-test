import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bep")
export default class BepController {
  @operation({
    summary: "Get Bep",
  })
  @get()
  static getBep = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bep",
  })
  @post("{id}")
  static createBep = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
