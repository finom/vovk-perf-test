import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blu")
export default class BluController {
  @operation({
    summary: "Get Blu",
  })
  @get()
  static getBlu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blu",
  })
  @post("{id}")
  static createBlu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
