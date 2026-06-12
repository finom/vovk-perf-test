import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzy")
export default class DzyController {
  @operation({
    summary: "Get Dzy",
  })
  @get()
  static getDzy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzy",
  })
  @post("{id}")
  static createDzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
