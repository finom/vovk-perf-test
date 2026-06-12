import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffj")
export default class FfjController {
  @operation({
    summary: "Get Ffj",
  })
  @get()
  static getFfj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffj",
  })
  @post("{id}")
  static createFfj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
