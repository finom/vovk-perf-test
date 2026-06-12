import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhl")
export default class MhlController {
  @operation({
    summary: "Get Mhl",
  })
  @get()
  static getMhl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhl",
  })
  @post("{id}")
  static createMhl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
