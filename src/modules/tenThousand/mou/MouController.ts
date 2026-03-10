import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mou")
export default class MouController {
  @operation({
    summary: "Get Mou",
  })
  @get()
  static getMou = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mou",
  })
  @post("{id}")
  static createMou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
