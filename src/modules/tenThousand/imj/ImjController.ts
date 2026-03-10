import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("imj")
export default class ImjController {
  @operation({
    summary: "Get Imj",
  })
  @get()
  static getImj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Imj",
  })
  @post("{id}")
  static createImj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
