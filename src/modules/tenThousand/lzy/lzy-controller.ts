import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzy")
export default class LzyController {
  @operation({
    summary: "Get Lzy",
  })
  @get()
  static getLzy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lzy",
  })
  @post("{id}")
  static createLzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
