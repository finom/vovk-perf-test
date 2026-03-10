import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dby")
export default class DbyController {
  @operation({
    summary: "Get Dby",
  })
  @get()
  static getDby = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dby",
  })
  @post("{id}")
  static createDby = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
