import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lct")
export default class LctController {
  @operation({
    summary: "Get Lct",
  })
  @get()
  static getLct = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lct",
  })
  @post("{id}")
  static createLct = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
