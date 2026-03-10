import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("frs")
export default class FrsController {
  @operation({
    summary: "Get Frs",
  })
  @get()
  static getFrs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Frs",
  })
  @post("{id}")
  static createFrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
