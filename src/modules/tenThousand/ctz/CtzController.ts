import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ctz")
export default class CtzController {
  @operation({
    summary: "Get Ctz",
  })
  @get()
  static getCtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ctz",
  })
  @post("{id}")
  static createCtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
