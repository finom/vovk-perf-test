import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mwy")
export default class MwyController {
  @operation({
    summary: "Get Mwy",
  })
  @get()
  static getMwy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mwy",
  })
  @post("{id}")
  static createMwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
