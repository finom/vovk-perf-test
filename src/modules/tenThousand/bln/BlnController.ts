import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bln")
export default class BlnController {
  @operation({
    summary: "Get Bln",
  })
  @get()
  static getBln = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Bln",
  })
  @post("{id}")
  static createBln = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
