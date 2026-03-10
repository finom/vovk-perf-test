import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bne")
export default class BneController {
  @operation({
    summary: "Get Bne",
  })
  @get()
  static getBne = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bne",
  })
  @post("{id}")
  static createBne = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
