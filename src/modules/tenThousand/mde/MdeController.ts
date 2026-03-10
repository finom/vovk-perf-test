import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mde")
export default class MdeController {
  @operation({
    summary: "Get Mde",
  })
  @get()
  static getMde = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mde",
  })
  @post("{id}")
  static createMde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
