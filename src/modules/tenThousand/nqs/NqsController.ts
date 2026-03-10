import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nqs")
export default class NqsController {
  @operation({
    summary: "Get Nqs",
  })
  @get()
  static getNqs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Nqs",
  })
  @post("{id}")
  static createNqs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
