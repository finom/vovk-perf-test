import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ffk")
export default class FfkController {
  @operation({
    summary: "Get Ffk",
  })
  @get()
  static getFfk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ffk",
  })
  @post("{id}")
  static createFfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
