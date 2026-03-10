import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moq")
export default class MoqController {
  @operation({
    summary: "Get Moq",
  })
  @get()
  static getMoq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Moq",
  })
  @post("{id}")
  static createMoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
