import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnw")
export default class MnwController {
  @operation({
    summary: "Get Mnw",
  })
  @get()
  static getMnw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mnw",
  })
  @post("{id}")
  static createMnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
