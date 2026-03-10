import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("neo")
export default class NeoController {
  @operation({
    summary: "Get Neo",
  })
  @get()
  static getNeo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Neo",
  })
  @post("{id}")
  static createNeo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
