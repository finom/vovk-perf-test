import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hut")
export default class HutController {
  @operation({
    summary: "Get Hut",
  })
  @get()
  static getHut = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hut",
  })
  @post("{id}")
  static createHut = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
