import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dtz")
export default class DtzController {
  @operation({
    summary: "Get Dtz",
  })
  @get()
  static getDtz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dtz",
  })
  @post("{id}")
  static createDtz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
