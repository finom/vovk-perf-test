import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aom")
export default class AomController {
  @operation({
    summary: "Get Aom",
  })
  @get()
  static getAom = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aom",
  })
  @post("{id}")
  static createAom = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
