import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lqa")
export default class LqaController {
  @operation({
    summary: "Get Lqa",
  })
  @get()
  static getLqa = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lqa",
  })
  @post("{id}")
  static createLqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
