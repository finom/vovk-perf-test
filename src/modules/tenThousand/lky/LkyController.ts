import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lky")
export default class LkyController {
  @operation({
    summary: "Get Lky",
  })
  @get()
  static getLky = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lky",
  })
  @post("{id}")
  static createLky = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
