import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mfe")
export default class MfeController {
  @operation({
    summary: "Get Mfe",
  })
  @get()
  static getMfe = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mfe",
  })
  @post("{id}")
  static createMfe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
