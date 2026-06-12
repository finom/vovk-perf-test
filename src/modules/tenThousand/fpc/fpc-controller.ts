import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fpc")
export default class FpcController {
  @operation({
    summary: "Get Fpc",
  })
  @get()
  static getFpc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fpc",
  })
  @post("{id}")
  static createFpc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
