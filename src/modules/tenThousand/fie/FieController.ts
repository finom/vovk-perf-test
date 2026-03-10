import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fie")
export default class FieController {
  @operation({
    summary: "Get Fie",
  })
  @get()
  static getFie = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fie",
  })
  @post("{id}")
  static createFie = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
