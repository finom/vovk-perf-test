import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fdb")
export default class FdbController {
  @operation({
    summary: "Get Fdb",
  })
  @get()
  static getFdb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fdb",
  })
  @post("{id}")
  static createFdb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
