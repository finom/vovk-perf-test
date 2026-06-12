import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mbo")
export default class MboController {
  @operation({
    summary: "Get Mbo",
  })
  @get()
  static getMbo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mbo",
  })
  @post("{id}")
  static createMbo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
