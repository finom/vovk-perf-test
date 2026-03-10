import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("miy")
export default class MiyController {
  @operation({
    summary: "Get Miy",
  })
  @get()
  static getMiy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Miy",
  })
  @post("{id}")
  static createMiy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
