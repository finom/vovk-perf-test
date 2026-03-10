import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("biu")
export default class BiuController {
  @operation({
    summary: "Get Biu",
  })
  @get()
  static getBiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Biu",
  })
  @post("{id}")
  static createBiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
