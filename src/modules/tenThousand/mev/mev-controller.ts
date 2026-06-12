import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mev")
export default class MevController {
  @operation({
    summary: "Get Mev",
  })
  @get()
  static getMev = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mev",
  })
  @post("{id}")
  static createMev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
